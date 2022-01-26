import PropTypes from "prop-types";
import {TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useState} from "react";

const EmailConfirmationComponent = (props) => {
    const classes = useStyle();
    const [isCodeFailed, setIsCodeFailed] = useState(false);
    const [isFieldActive, setIsFieldActive] = useState(true);
    const checkIfCodeIsCorrect = (newCode) => {
        setIsFieldActive(false);
        console.log("Api call with code", newCode);
        setTimeout(() => setIsFieldActive(true), 3000);
        setIsCodeFailed(false);
    }
    const onCodeChanged = (newCode) => {
        if (newCode.length === 6) checkIfCodeIsCorrect(newCode)
    }
    return <div>
        <Typography variant={"h6"}>Email confirmation</Typography>
        <Typography variant={"body1"}>We've sent an email confirmation to {props.email}. The letter will include the
            code, please, type it in the field below. If you don't see anything, please check your Spam
            folder.</Typography>
        <div className={classes.codeContainer}>
            <TextField disabled={!isFieldActive} onChange={(event) => onCodeChanged(event.target.value)}
                       inputProps={{maxLength: 6}} variant={"outlined"} label={"Confirmation code"}/>
        </div>
    </div>
}

EmailConfirmationComponent.propTypes = {
    email: PropTypes.string.isRequired
}


export default EmailConfirmationComponent;