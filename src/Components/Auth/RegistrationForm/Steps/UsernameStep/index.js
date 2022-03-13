import {Button, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkEmail, checkUserName} from "../../../../../Redux/actions";

const UsernameComponent = (props) => {
    const classes = useStyle();
    const [isEmailError, setEmailError] = useState(false);
    const [isUsernameError, setUsernameError] = useState(false);
    const [isFirstNameError, setFirstNameError] = useState(false);
    const [isLastNameError, setLastNameError] = useState(false);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

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
        }
        if (!validateUsername(props.firstName)) {
            setFirstNameError(true);
        }
        if (!validateUsername(props.lastName)) {
            setLastNameError(true);
        }
        dispatch(checkEmail(props.email))
        dispatch(checkUserName(props.username))
    };
    const isUserNameSuccess = useSelector(state => state.isUserNameSuccess);
    const isEmailSuccess = useSelector(state => state.isEmailSuccess);
    useEffect(()=>()=>{
        if (!isEmailSuccess.status) setEmailError(true);
        if (!isUserNameSuccess.status) setUsernameError(true);
        if (!isEmailError && !isUsernameError && !isFirstNameError && !isLastNameError && isEmailSuccess.status && isUserNameSuccess.status)
            props.nextClickListener();
    },[isUserNameSuccess, isEmailSuccess])
    return <div className={classes.registrationForm}>
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Username"}
                   placeholder={"Your creative Username"}
                   disabled={isLoading}
                   value={props.username}
                   error={isUsernameError}
                   helperText={isUsernameError ? isUserNameSuccess.message ?? "Incorrect username" : undefined}
                   onChange={(event) => {
                       props.usernameCallback(event.target.value)
                       if (isUsernameError) setUsernameError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Email"}
                   placeholder={"youremail@mail.com"}
                   disabled={isLoading}
                   value={props.email}
                   error={isEmailError}
                   helperText={isEmailError ? isEmailSuccess.message ?? "Incorrect email address" : undefined}
                   onChange={(event) => {
                       props.emailCallback(event.target.value)
                       if (isEmailError) setEmailError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"First Name"}
                   placeholder={"John"}
                   disabled={isLoading}
                   value={props.firstName}
                   error={isFirstNameError}
                   helperText={isFirstNameError ? "Incorrect First Name" : undefined}
                   onChange={(event) => {
                       props.firstNameCallback(event.target.value)
                       if (isFirstNameError) setFirstNameError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Last Name"}
                   placeholder={"Smith"}
                   disabled={isLoading}
                   value={props.lastName}
                   error={isLastNameError}
                   helperText={isLastNameError ? "Incorrect Last Name" : undefined}
                   onChange={(event) => {
                       props.lastNameCallback(event.target.value)
                       if (isLastNameError) setLastNameError(false)
                   }}
        />
        <div className={classes.buttons}>
            <Button startIcon={<CloseIcon/>} disabled={isLoading} variant={"outlined"} onClick={props.cancelClickListener}>Cancel</Button>
            <Button endIcon={<ArrowForwardIcon/>} disabled={isLoading} variant={"contained"} onClick={next}>Next</Button>
        </div>
    </div>
}

UsernameComponent.propTypes = {
    usernameCallback: PropTypes.func.isRequired,
    emailCallback: PropTypes.func.isRequired,
    cancelClickListener: PropTypes.func.isRequired,
    nextClickListener: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    firstName : PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    firstNameCallback : PropTypes.func.isRequired,
    lastNameCallback : PropTypes.func.isRequired
}
export default UsernameComponent;