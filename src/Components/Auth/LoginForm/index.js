import {Button, IconButton, InputAdornment, Link, TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {finishLogin, finishRegistration, login} from "../../../Redux/actions";
import LoadingButton from '@mui/lab/LoadingButton';

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyle();
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onShowPasswordClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const onLoginClicked = () => {
        dispatch(login({login: email, password: password}))
    };
    const isLoading = useSelector(state => state.isLoading);
    const isLoggedIn = useSelector(state => state.account.isLoggedIn);
    const checkResultStatus = useSelector(state => state.login);
    const register = () => navigate("/auth/registration");
    const forgotPassword = ()=>{
        if (!isLoading) navigate("forgot-password")
    }
    useEffect(() => {
        if (checkResultStatus === true) {
            dispatch(finishLogin())
        }
    }, [checkResultStatus])
    useEffect(() => {
            if (isLoggedIn) navigate("/hub")
        },
        [isLoggedIn]
    )
    useEffect(()=>{
        dispatch(finishRegistration())
    },[])
    return (
        <>
            <Typography variant={"h4"}>Hey there!</Typography>
            <Typography variant={"subtitle1"}>We need you to log in before
                using 勉強！</Typography>
            <div className={classes.fields}>
                <TextField fullWidth variant={"outlined"} label={"Email"} placeholder={"youremail@mail.com"}
                           type={"email"}
                           value={email} onChange={event => {
                    setEmail(event.target.value)
                }}
                           disabled={isLoading}/>
                <TextField fullWidth variant={"outlined"} label={"Password"}
                           placeholder={"Your very secure password"}
                           type={isPasswordVisible ? "text" : "password"}
                           value={password}
                           onChange={event => {
                               setPassword(event.target.value)
                           }}
                           InputProps={{
                               endAdornment: <InputAdornment position={"end"}>
                                   <IconButton onClick={onShowPasswordClick}
                                               onMouseDown={event => event.preventDefault()} disabled={isLoading}>
                                       {isPasswordVisible ? <VisibilityOff/> : <Visibility/>}
                                   </IconButton>
                               </InputAdornment>
                           }
                           }
                           disabled={isLoading}

                />
                <Link onClick={forgotPassword} style={{cursor:"pointer", alignSelf:"start"}}>I forgot my password</Link>
            </div>
            <div className={classes.buttons}>
                {isLoading ? <LoadingButton
                    loading
                    loadingPosition="end"
                    variant="contained"
                    size={"large"}
                >
                    Logging in...
                </LoadingButton> : <Button variant={"contained"} size={"large"} onClick={onLoginClicked}>
                    Log in
                </Button>}
                <Typography variant={"subtitle1"}>
                    Don't have an account yet?
                </Typography>
                <Button variant={"text"} size={"large"} onClick={register} disabled={isLoading}>
                    Sign up
                </Button>
            </div>
        </>)
}

export default LoginComponent;