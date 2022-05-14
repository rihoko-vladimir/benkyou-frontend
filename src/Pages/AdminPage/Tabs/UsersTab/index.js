import PropTypes from "prop-types";
import {TabPanel} from "@mui/lab";

const UsersTab = ({index, value}) =>{
    return <TabPanel value={value} tabIndex={index}>
        {"users"}
    </TabPanel>;
}

UsersTab.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default UsersTab;