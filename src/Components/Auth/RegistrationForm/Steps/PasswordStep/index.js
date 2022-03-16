import {Button, IconButton, InputAdornment, TextField} from "@mui/material";
import useStyle from "./style";
import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from "prop-types";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../../../Redux/actions";
import {returnToUsername, setRegistrationStep} from "../../../../../Redux/actions";

const PasswordComponent = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const [isPasswordError, setPasswordError] = useState(false);
    const [isPasswordConfirmationError, setPasswordConfirmationError] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isPasswordConfirmationVisible, setPasswordConfirmationVisible] = useState(false);
    const verifyPassword = (password) => password.match(/^[a-zA-Z0-9]{6,}$/)
    const verifyPasswordConfirmation = (passwordConfirmation) => passwordConfirmation === password;
    const password = useSelector(state => state.registration.password);
    const passwordConfirmation = useSelector(state => state.registration.passwordConfirmation);
    const setPassword = (password) => dispatch(actions.changeRegistrationPassword(password));
    const setPasswordConfirmation = (passwordConfirmation)=>dispatch(actions.changeRegistrationPasswordConfirmation(passwordConfirmation));
    const registrationStep = useSelector(state => state.registration.step);
    const next = () => {
        if (!verifyPassword(password)) {
            setPasswordError(true);
            return;
        }
        if (!verifyPasswordConfirmation(passwordConfirmation)) {
            setPasswordConfirmationError(true);
            return;
        }
        dispatch(setRegistrationStep(registrationStep+1))
    }

    const back = ()=>{
        dispatch(returnToUsername());
        dispatch(setRegistrationStep(registrationStep-1));
    }

    const onShowPasswordClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const onShowPasswordConfirmationClick = () => {
        setPasswordConfirmationVisible(!isPasswordConfirmationVisible);
    }

    return <div className={classes.registrationForm}>
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
        <div className={classes.buttons}>
            <Button startIcon={<ArrowBackIcon/>} variant={"outlined"}
                    onClick={back}>Previous</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next}>Next</Button>
        </div>
    </div>
}
export default PasswordComponent;