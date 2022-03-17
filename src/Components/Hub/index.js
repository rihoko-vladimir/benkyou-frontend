import NavigationDrawer from "../NavigationDrawer";
import useStyles from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Slide, Snackbar} from "@mui/material";
import {hideSnackbar} from "../../Redux/actions";
import EditDialog from "../../Pages/CardEditDialog";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router";

const HubComponent = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.account.isLoggedIn);
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackbarInfo = useSelector(state => state.snackbar);
    const errorSnackbarInfo = useSelector(state => state.errorSnackbar);
    useEffect(()=>{
        if (!isLoggedIn) navigate("/");
    }, [])
    const onClose = () => {
        dispatch(hideSnackbar())
    }
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        <Outlet/>
        <Snackbar open={snackbarInfo.isShown}
                  message={snackbarInfo.message}
                  autoHideDuration={2500}
                  onClose={onClose}
                  TransitionComponent={Slide}/>
        <Snackbar open={errorSnackbarInfo.isShown}
                  autoHideDuration={2500}
                  onClose={onClose}
                  TransitionComponent={Slide}>
            <Alert severity="error">
                {errorSnackbarInfo.message}
            </Alert>
        </Snackbar>
        <EditDialog/>
    </div>
}

export default HubComponent;