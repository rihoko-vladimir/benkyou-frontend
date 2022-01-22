import {Button, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import PropTypes from "prop-types";
import {useState} from "react";

const UsernameComponent = (props) => {
    const classes = useStyle();
    const [isEmailError, setEmailError] = useState(false);
    const [isUsernameError, setUsernameError] = useState(false);
    //Just some email regex validation from stackoverflow :P
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    //Username regex
    const validateUsername = (password) => {
        return String(password)
            .toLowerCase()
            .match(
                /^[a-zA-Z\-]+$/
            );
    };
    const next = () => {
        if (!validateUsername(props.username)) {
            setUsernameError(true);
        }
        if (!validateEmail(props.email)) {
            setEmailError(true);
            return;
        }
        props.nextClickListener();
    };

    return <div className={classes.registrationForm}>
        <TextField fullWidth variant={"outlined"} label={"Username"}
                   placeholder={"Your creative Username"}
                   value={props.username}
                   error={isUsernameError}
                   helperText={isUsernameError ? "Incorrect username" : undefined}
                   onChange={(event) => {
                       props.usernameCallback(event.target.value)
                       if (isUsernameError) setUsernameError(false)
                   }}
        />
        <TextField fullWidth variant={"outlined"} label={"Email"}
                   placeholder={"youremail@mail.com"}
                   value={props.email}
                   error={isEmailError}
                   helperText={isEmailError ? "Incorrect email address" : undefined}
                   onChange={(event) => {
                       props.emailCallback(event.target.value)
                       if (isEmailError) setEmailError(false)
                   }}
        />
        <div className={classes.buttons}>
            <Button startIcon={<CloseIcon/>} variant={"outlined"} onClick={props.cancelClickListener}>Cancel</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next}>Next</Button>
        </div>
    </div>
    //TODO also need to check on the server if the username is occupied, will add this in the future
}

UsernameComponent.propTypes = {
    usernameCallback: PropTypes.func.isRequired,
    emailCallback: PropTypes.func.isRequired,
    cancelClickListener: PropTypes.func.isRequired,
    nextClickListener: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}
export default UsernameComponent;