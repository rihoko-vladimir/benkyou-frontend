import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";
import {Typography} from "@mui/material";
import TimeOfDayGreeting from "../../../../Components/TimeOfDayGreeting";
import useStyle from "./style";

const DashboardTab = ({value, index})=>{
    const classes = useStyle();
    const reportCount = 0;
    const userCount = 0;
    const totalSetCount = 0;
    return <TabPanel value={value} tabIndex={index}>
        <TimeOfDayGreeting variant={"h6"} name={"Vladimir"} className={classes.titlePadding}/>
        <Typography variant={"subtitle1"}>
            There are {reportCount} reports{reportCount === 0 ? "." : ", you might want to review some of them!"}
        </Typography>
        <Typography variant={"subtitle1"}>
            Currently there are {userCount} users registered.
        </Typography>
        <Typography variant={"subtitle1"}>
            Users created {totalSetCount} sets.
        </Typography>
    </TabPanel>;
}

DashboardTab.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default DashboardTab;