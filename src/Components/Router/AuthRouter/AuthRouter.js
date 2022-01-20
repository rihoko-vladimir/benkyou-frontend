import useStyle from "./style";
import {Button, TextField, Typography} from "@mui/material";

const AuthRouter = () => {
    //currently just a page, i'll split everything in future
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.background}>
                <div className={classes.blur}/>
            </div>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Typography variant={"h4"}>Hey there!<Typography variant={"subtitle1"}>We need you to log in before
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
                        <Button variant={"text"} size={"large"}>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AuthRouter;