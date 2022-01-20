import {Button, TextField, Typography} from "@mui/material";
import useStyle from "./style";
import {useNavigate} from "react-router";

const LoginComponent = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const register = () => {
        setTimeout(() => navigate("/registration"), 250)
    };
    return (
        <div><Typography variant={"h4"}>Hey there!<Typography variant={"subtitle1"}>We need you to log in before
            using 勉強！</Typography></Typography>
            <div className={classes.fields}>
                <TextField fullWidth variant={"outlined"} label={"Email"} placeholder={"youremail@mail.com"}/>
                <TextField fullWidth variant={"outlined"} label={"Password"}
                           placeholder={"Your very secure password"}/>
            </div>
            <div className={classes.buttons}>
                <Button variant={"contained"} size={"large"}>
                    Log in
                </Button>
                <Button size={"large"}>
                    Log in with Google
                </Button>
                <Typography variant={"subtitle1"}>
                    Don't have an account yet?
                </Typography>
                <Button variant={"text"} size={"large"} onClick={() => register()}>
                    Sign up
                </Button>
            </div>
        </div>)
}

export default LoginComponent;