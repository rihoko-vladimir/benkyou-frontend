import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {resetSetNewPassword, setRegistrationStep} from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import useStyle from "./style";
import {useNavigate} from "react-router";

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [isPasswordError, setPasswordError] = useState(false);
    const [isPasswordConfirmationError, setPasswordConfirmationError] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isPasswordConfirmationVisible, setPasswordConfirmationVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const resetResult = useSelector(state => state.resetSetPassword);
    const isLoading = useSelector(state => state.isLoading);
    const onShowPasswordClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const onShowPasswordConfirmationClick = () => {
        setPasswordConfirmationVisible(!isPasswordConfirmationVisible);
    }
    const verifyPassword = (password) => password.match(/^[a-zA-Z0-9]{6,}$/)
    const verifyPasswordConfirmation = (passwordConfirmation) => passwordConfirmation === password;
    const email = searchParams.get("email");
    const token = searchParams.get("token").replace(/ /ig, "+");
    console.log(token)
    const onConfirm = () => {
        if (!verifyPassword(password)) {
            setPasswordError(true);
            return;
        }
        if (!verifyPasswordConfirmation(passwordConfirmation)) {
            setPasswordConfirmationError(true);
            return;
        }
        console.log(token)
        console.log(searchParams)
        dispatch(resetSetNewPassword({password, email, token}));
    }
    useEffect(()=>{
        if (resetResult.success === true) navigate("/auth");
    },[resetResult])
    return (
        <>
            <Typography variant={"h4"}>
                New password
            </Typography>
            <Typography variant={"subtitle1"}>
                Please, enter your new password in field below
            </Typography>
            <div className={classes.fields}>
            <TextField fullWidth variant={"outlined"} label={"Password"}
                       placeholder={"Your very secure password"}
                       value={password}
                       error={isPasswordError}
                       helperText={isPasswordError ? "Incorrect password" : undefined}
                       type={isPasswordVisible ? "text" : "password"}
                       onChange={(event) => {
                           if (isPasswordError) setPasswordError(false);
                           setPassword(event.target.value);
                       }
                       }
                       InputProps={{
                           endAdornment: <InputAdornment position={"end"}>
                               <IconButton onClick={onShowPasswordClick}
                                           onMouseDown={event => event.preventDefault()}
                               >
                                   {isPasswordVisible ? <VisibilityOff/> : <Visibility/>}
                               </IconButton>
                           </InputAdornment>
                       }
                       }
            />
            <TextField fullWidth variant={"outlined"} label={"Confirm password"}
                       placeholder={"Your very secure password confirmation"}
                       value={passwordConfirmation}
                       error={isPasswordConfirmationError}
                       helperText={isPasswordConfirmationError ? "Passwords does not match" : undefined}
                       onChange={(event) => {
                           if (isPasswordConfirmationError) setPasswordConfirmationError(false);
                           setPasswordConfirmation(event.target.value)
                       }}
                       type={isPasswordConfirmationVisible ? "text" : "password"}
                       InputProps={{
                           endAdornment: <InputAdornment position={"end"}>
                               <IconButton onClick={onShowPasswordConfirmationClick}
                                           onMouseDown={event => event.preventDefault()}
                               >
                                   {isPasswordConfirmationVisible ? <VisibilityOff/> : <Visibility/>}
                               </IconButton>
                           </InputAdornment>
                       }
                       }
            />
            </div>
            <div className={classes.button}>
                <Button variant={"contained"}
                        disabled={isLoading}
                        onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </>
    );
};

ResetPasswordForm.propTypes = {

};

export default ResetPasswordForm;