import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";

const ReportsTab = ({index, value}) =>{
    return <TabPanel value={value} tabIndex={index}>
        {"reports"}
    </TabPanel>;
}

ReportsTab.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default ReportsTab;