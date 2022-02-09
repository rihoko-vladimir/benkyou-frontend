import {Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useNavigate} from "react-router";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {loginTest} from "../../Redux/actions";

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
        //TODO fix that later!
        dispatch(loginTest())
        navigate("/");
    };
    const register = () => navigate("/auth/registration");
    return (
        <div>
            <Typography variant={"h4"}>Hey there!</Typography>
            <Typography variant={"subtitle1"}>We need you to log in before
                using 勉強！</Typography>
            <div className={classes.fields}>
                <TextField fullWidth variant={"outlined"} label={"Email"} placeholder={"youremail@mail.com"}
                           type={"email"}
                           value={email} onChange={event => setEmail(event.target.value)}/>
                <TextField fullWidth variant={"outlined"} label={"Password"}
                           placeholder={"Your very secure password"}
                           type={isPasswordVisible ? "text" : "password"}
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           InputProps={{
                               endAdornment: <InputAdornment position={"end"}>
                                   <IconButton onClick={onShowPasswordClick}
                                               onMouseDown={event => event.preventDefault()}>
                                       {isPasswordVisible ? <VisibilityOff/> : <Visibility/>}
                                   </IconButton>
                               </InputAdornment>
                           }
                           }
                />
            </div>
            <div className={classes.buttons}>
                <Button variant={"contained"} size={"large"} onClick={onLoginClicked}>
                    Log in
                </Button>
                <Button size={"large"}>
                    Log in with Google
                </Button>
                <Typography variant={"subtitle1"}>
                    Don't have an account yet?
                </Typography>
                <Button variant={"text"} size={"large"} onClick={register}>
                    Sign up
                </Button>
            </div>
        </div>)
}

export default LoginComponent;