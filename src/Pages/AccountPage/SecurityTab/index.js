import PropTypes from "prop-types";
import {TextField} from "@mui/material";
import useStyle from "./style";
import {TabPanel} from "@mui/lab";
import {useSelector} from "react-redux";

const SecurityTab = ({value, index}) => {
    const classes = useStyle();
    const userName = useSelector(state => state.accountPage.nickName);
    const email = useSelector(state => state.accountPage.email);
    return <TabPanel value={value} tabIndex={index} className={classes.fieldsContainer}>
        <TextField label={"UserName"}
                   required
                   value={userName}
                   variant={"outlined"}/>
        <TextField label={"Email"}
                   required
                   value={email}
                   variant={"outlined"}/>
        <TextField label={"Password"}
                   required
                   variant={"outlined"}/>
    </TabPanel>
}

SecurityTab.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default SecurityTab;