import React from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useNavigate} from "react-router";

const ResetLinkSent = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const onOk = ()=>{
        navigate("/auth");
    }
    return (
        <>
            <Typography variant={"h4"}>
                Forgot password
            </Typography>
            <Typography variant={"subtitle1"} className={classes.text}>
                We sent email, which will include password reset link. If you don't see anything, please check your Spam
                folder.
            </Typography>

            <div className={classes.button}>
                <Button variant={"contained"}
                        onClick={onOk}>
                    Ok
                </Button>
            </div>
        </>
    );
};

export default ResetLinkSent;