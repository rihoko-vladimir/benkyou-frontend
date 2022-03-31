import useStyle from "./style";
import {FormControlLabel, FormGroup, FormHelperText, Switch, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../Redux/actions"

const GeneralTab = ({index, value}) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const isPublic = useSelector(state => state.account.isPublic)
    const changeVisibility = ()=>{
        dispatch(actions.changeVisibility(!isPublic))
    }
    return <TabPanel value={value} tabIndex={index}>
        <div className={classes.container}>
            <FormGroup>
                <FormControlLabel control={<Switch checked={isPublic} onClick={changeVisibility}/>} label={"Make my account public"} labelPlacement={"end"}/>
                <FormHelperText>This will allow other users to view and save your sets</FormHelperText>
            </FormGroup>
        </div>
    </TabPanel>
}

GeneralTab.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default GeneralTab;