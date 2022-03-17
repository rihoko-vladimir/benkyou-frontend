import useStyle from "./style";
import {Outlet} from "react-router-dom";
import {Alert, Slide, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hideSnackbar} from "../../Redux/actions";

const AuthPage = () => {
    const dispatch = useDispatch();
    const classes = useStyle();
    const errorSnackbarInfo = useSelector(state => state.errorSnackbar);
    const onClose = () => {
        dispatch(hideSnackbar())
    }
    return (<div className={classes.container}>
        <div className={classes.background}>
            <div className={classes.blur}/>
        </div>
        <div className={classes.container}>
            <div className={classes.card}>
                <Outlet/>
                <Snackbar open={errorSnackbarInfo.isShown}
                          autoHideDuration={2500}
                          onClose={onClose}
                          TransitionComponent={Slide}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        {errorSnackbarInfo.message}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    </div>)
}

export default AuthPage;