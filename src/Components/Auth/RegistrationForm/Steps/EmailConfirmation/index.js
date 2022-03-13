import PropTypes from "prop-types";
import {TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendEmailCode} from "../../../../../Redux/actions";
import {useNavigate} from "react-router";

const EmailConfirmationComponent = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isFieldActive, setIsFieldActive] = useState(true);
    const [isFailure, setFailure] = useState(false);
    const userId = useSelector(state => state.register)
    const checkIfCodeIsCorrect = (newCode) => {
        setIsFieldActive(false);
        dispatch(sendEmailCode({emailCode: newCode, userId: userId.payload}))
        setTimeout(() => setIsFieldActive(true), 3000);
    }
    const onCodeChanged = (newCode) => {
        if (newCode.length === 6) checkIfCodeIsCorrect(newCode)
    }
    const resultReducer = useSelector(state => state.result);
    useEffect(()=>()=>{
        if (resultReducer.success) {
            setTimeout(()=>navigate("/auth"),3000);
        }else{
            setFailure(true);
        }
    }, [resultReducer])
    return <div>
        <Typography variant={"h6"}>Email confirmation</Typography>
        <Typography variant={"body1"}>We've sent an email confirmation to {props.email}. The letter will include the
            code, please, type it in the field below. If you don't see anything, please check your Spam
            folder.</Typography>
        <div className={classes.codeContainer}>
            <TextField disabled={!isFieldActive}
                       onChange={(event) => onCodeChanged(event.target.value)}
                       inputProps={{maxLength: 6}}
                       variant={"outlined"}
                       label={"Confirmation code"}
                       color={isFailure? "error": undefined}
                       focused={isFailure}
            />
        </div>
    </div>
}

EmailConfirmationComponent.propTypes = {
    email: PropTypes.string.isRequired
}


export default EmailConfirmationComponent;