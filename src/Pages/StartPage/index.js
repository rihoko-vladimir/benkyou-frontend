import useStyle from "./style";
import {CircularProgress, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useState} from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router";

const StartPage = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.account.isLoggedIn);
    const checkupFunction = () => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
            setLoading(false);
            setSuccess(true);
            setTimeout(()=>navigate("/hub"),300);
        } else {
            setLoading(false);
            setFailed(true);
            setTimeout(()=>navigate("/auth"),300);
        }
    };
    const [isLoading, setLoading] = useState(true);
    const [isSuccess, setSuccess] = useState(false);
    const [isFailed, setFailed] = useState(false);
    setTimeout(checkupFunction, 3000);
    //still need to add autoplay, it will look better
    return (
        <div className={classes.container}>
            <div className={classes.background}>
                <div className={classes.blur}/>
            </div>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Typography variant={"h4"}>Welcome to the 勉強!<Typography variant={"subtitle1"}>Please wait, while we
                        are checking your Authentication status</Typography></Typography>
                    {isLoading ? <CircularProgress/> : null}
                    {isSuccess ? <CheckIcon color={"success"} sx={{
                        width: "40px",
                        height: "40px",
                    }}/> : null}
                    {isFailed ? <CloseIcon color={"error"} sx={{
                        width: "40px",
                        height: "40px",
                    }}/> : null}
                </div>
            </div>
        </div>
    );
}

export default StartPage;