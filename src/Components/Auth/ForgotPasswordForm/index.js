import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import useStyle from "./style";
import {useNavigate} from "react-router";
import {resetPasswordSend} from "../../../Redux/actions";
import {RESET_SENT} from "../../../Router/paths";

const ForgotPasswordForm = () => {
    const classes = useStyle();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const result = useSelector(state => state.resetSend);
    const onCancel = ()=>{
        navigate("/auth");
    }
    const onSend = ()=>{
        dispatch(resetPasswordSend(email))
    }
    useEffect(()=>{
        if (result.status === true) navigate(RESET_SENT);
    }, [result])
    return (<>
        <Typography variant={"h4"}>
            Forgot password
        </Typography>
        <Typography variant={"subtitle1"}>
            Don't worry! We just need some info to confirm your identity
        </Typography>
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Email"}
                   placeholder={"youremail@mail.com"}
                   type={"email"}
                   className={classes.emailField}
                   value={email} onChange={event => {setEmail(event.target.value)}}
                   disabled={isLoading}/>
        <div className={classes.buttons}>
            <Button variant={"outlined"}
                    disabled={isLoading}
                    onClick={onCancel}>
                Cancel
            </Button>
            <Button variant={"contained"}
                    disabled={isLoading}
                    onClick={onSend}>
                Send reset link
            </Button>
        </div>
    </>);
};

export default ForgotPasswordForm;