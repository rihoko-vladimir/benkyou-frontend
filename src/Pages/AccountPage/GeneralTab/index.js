import useStyle from "./style";
import {FormControlLabel, FormGroup, Switch, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";

const GeneralTab = ({index, value}) => {
    const classes = useStyle();
    return <TabPanel value={value} tabIndex={index}>
        <div className={classes.container}>
            <FormGroup>
                <FormControlLabel control={<Switch/>} label={"Make my account public"} labelPlacement={"end"}/>
                <Typography variant={"caption"} color={"gray"}>This will allow other users to view and save your packs</Typography>
            </FormGroup>
        </div>
    </TabPanel>
}

GeneralTab.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default GeneralTab;