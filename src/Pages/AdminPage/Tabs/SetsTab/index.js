import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";

const SetsTab = ({index, value}) =>{
    return <TabPanel value={value} tabIndex={index}>
        {"sets"}
    </TabPanel>;
}

SetsTab.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default SetsTab;