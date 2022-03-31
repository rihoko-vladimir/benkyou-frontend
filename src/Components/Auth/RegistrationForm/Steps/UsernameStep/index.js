import {Button, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../../../Redux/actions";
import {useNavigate} from "react-router";

const UsernameComponent = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isEmailError, setEmailError] = useState(false);
    const [isUsernameError, setUsernameError] = useState(false);
    const [isFirstNameError, setFirstNameError] = useState(false);
    const [isLastNameError, setLastNameError] = useState(false);
    const isLoading = useSelector(state => state.isLoading);
    const userName = useSelector(state => state.registration.userName);
    const email = useSelector(state => state.registration.email);
    const firstName = useSelector(state => state.registration.firstName);
    const lastName = useSelector(state => state.registration.lastName);
    const isUserNameSuccess = useSelector(state => state.isUserNameSuccess);
    const isEmailSuccess = useSelector(state => state.isEmailSuccess);
    const registrationStep = useSelector(state => state.registration.step);
    const setUserName = (userName) => dispatch(actions.changeRegistrationUserName(userName));
    const setEmail = (email) => dispatch(actions.changeRegistrationEmail(email));
    const setFirstName = (firstName) => dispatch(actions.changeRegistrationFirstName(firstName));
    const setLastName = (lastName) => dispatch(actions.changeRegistrationLastName(lastName));

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
        if (!validateUsername(userName)) {
            setUsernameError(true);
        }
        if (!validateEmail(email)) {
            setEmailError(true);
        }
        if (!validateUsername(firstName)) {
            setFirstNameError(true);
        }
        if (!validateUsername(lastName)) {
            setLastNameError(true);
        }
        dispatch(actions.checkEmail(email))
        dispatch(actions.checkUserName(userName))
    };
    const close = ()=>{
        dispatch(actions.finishRegistration())
        navigate("/auth")
    }
    useEffect(() => {
        if (isEmailSuccess.status === false) {
            setEmailError(true);

        }
        if (!isUserNameSuccess.status === false) {
            setUsernameError(true);

        }
        if (!isEmailError && !isUsernameError && !isFirstNameError && !isLastNameError && isEmailSuccess.status && isUserNameSuccess.status)
            dispatch(actions.setRegistrationStep(registrationStep + 1))
    }, [isUserNameSuccess, isEmailSuccess])
    return <div className={classes.registrationForm}>
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Username"}
                   placeholder={"Your creative Username"}
                   disabled={isLoading}
                   value={userName}
                   error={isUsernameError}
                   helperText={isUsernameError ? isUserNameSuccess.message ?? "Incorrect username" : undefined}
                   onChange={(event) => {
                       setUserName(event.target.value)
                       if (isUsernameError) setUsernameError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Email"}
                   placeholder={"youremail@mail.com"}
                   disabled={isLoading}
                   value={email}
                   error={isEmailError}
                   helperText={isEmailError ? isEmailSuccess.message ?? "Incorrect email address" : undefined}
                   onChange={(event) => {
                       setEmail(event.target.value)
                       if (isEmailError) setEmailError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"First Name"}
                   placeholder={"John"}
                   disabled={isLoading}
                   value={firstName}
                   error={isFirstNameError}
                   helperText={isFirstNameError ? "Incorrect First Name" : undefined}
                   onChange={(event) => {
                       setFirstName(event.target.value)
                       if (isFirstNameError) setFirstNameError(false)
                   }}
        />
        <TextField fullWidth
                   variant={"outlined"}
                   label={"Last Name"}
                   placeholder={"Smith"}
                   disabled={isLoading}
                   value={lastName}
                   error={isLastNameError}
                   helperText={isLastNameError ? "Incorrect Last Name" : undefined}
                   onChange={(event) => {
                       setLastName(event.target.value)
                       if (isLastNameError) setLastNameError(false)
                   }}
        />
        <div className={classes.buttons}>
            <Button startIcon={<CloseIcon/>} disabled={isLoading} variant={"outlined"}
                    onClick={close}>Cancel</Button>
            <Button endIcon={<ArrowForwardIcon/>} disabled={isLoading} variant={"contained"}
                    onClick={next}>Next</Button>
        </div>
    </div>
}
export default UsernameComponent;