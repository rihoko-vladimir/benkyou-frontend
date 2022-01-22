import {Button, TextField} from "@mui/material";
import useStyle from "./style";
import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from "prop-types";

const PasswordComponent = (props) => {
    const classes = useStyle();
    const [isPasswordError, setPasswordError] = useState(false);
    const [isPasswordConfirmationError, setPasswordConfirmationError] = useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const verifyPassword = (password) => password.match(/^[a-zA-Z0-9]{6,}$/)
    const verifyPasswordConfirmation = (passwordConfirmation) => passwordConfirmation === props.password;
    const next = () => {
        if (!verifyPassword(props.password)) {
            setPasswordError(true);
            return;
        }
        if (!verifyPasswordConfirmation(passwordConfirmation)) {
            setPasswordConfirmationError(true);
            return;
        }
        props.nextClickListener();
    }
    return <div className={classes.registrationForm}>
        <TextField fullWidth variant={"outlined"} label={"Password"}
                   placeholder={"Your very secure password"}
                   value={props.password}
                   error={isPasswordError}
                   helperText={isPasswordError ? "Incorrect password" : undefined}
                   onChange={(event) => {
                       if (isPasswordError) setPasswordError(false);
                       props.passwordCallback(event.target.value);
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
        />
        <div className={classes.buttons}>
            <Button startIcon={<ArrowBackIcon/>} variant={"outlined"}
                    onClick={props.previousClickListener}>Previous</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next}>Next</Button>
        </div>
    </div>
    //TODO also check on API
}

PasswordComponent.propTypes = {
    passwordCallback: PropTypes.func.isRequired,
    previousClickListener: PropTypes.func.isRequired,
    nextClickListener: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired
}
export default PasswordComponent;