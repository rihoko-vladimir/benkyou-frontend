import PropTypes from "prop-types";
import {Tab, TextField} from "@mui/material";
import useStyle from "./style";
import {useState} from "react";

const PersonalTab = ({userName, email}) => {
    const classes = useStyle();
    const [tempUserName, setTempUserName] = useState(userName)
    const [tempEmail, setTempEmail] = useState(email);
    const [tempPassword, setTempPassword] = useState("");
    return <Tab label={"Personal"} disabled className={classes.fieldsContainer}>
        <TextField label={"UserName"}
                   value={tempUserName}
                   required
                   onChange={e => setTempUserName(e.target.value)}
                   variant={"outlined"}/>
        <TextField label={"Email"}
                   required
                   value={tempEmail}
                   onChange={e => setTempEmail(e.target.value)}
                   variant={"outlined"}/>
        <TextField label={"Password"}
                   required
                   value={tempPassword}
                   onChange={e => setTempPassword(e.target.value)}
                   variant={"outlined"}/>
    </Tab>
}

PersonalTab.propTypes = {
    userName: PropTypes.string.isRequired, email: PropTypes.string.isRequired
}

export default PersonalTab;