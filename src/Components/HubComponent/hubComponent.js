import PropTypes from "prop-types";
import NavigationDrawer from "../NavigationDrawerComponent/navigationDrawer";
import useStyles from "./style";
import {useDispatch, useSelector} from "react-redux";
import {Slide, Snackbar} from "@mui/material";
import {hideSnackbar} from "../../Redux/actions";
import EditDialog from "../Pages/CardEditDialog/editDialog";

const HubComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackbarInfo = useSelector(state => state.snackbar);
    const onClose = () => {
        dispatch(hideSnackbar())
    }
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        {props.render}
        <Snackbar open={snackbarInfo.isShown}
                  message={snackbarInfo.message}
                  autoHideDuration={4000}
                  onClose={onClose}
                  TransitionComponent={Slide}/>
        <EditDialog/>
    </div>
}

HubComponent.propTypes = {
    render: PropTypes.element.isRequired
};

export default HubComponent;