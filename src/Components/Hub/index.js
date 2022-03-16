import NavigationDrawer from "../NavigationDrawer";
import useStyles from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Slide, Snackbar} from "@mui/material";
import {hideSnackbar} from "../../Redux/actions";
import EditDialog from "../../Pages/CardEditDialog";
import {Outlet} from "react-router-dom";

const HubComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackbarInfo = useSelector(state => state.snackbar);
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
        <EditDialog/>
    </div>
}

export default HubComponent;