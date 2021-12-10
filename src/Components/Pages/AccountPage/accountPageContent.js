import {Avatar, TextField, Typography} from "@mui/material";
import useStyles from "./style";
import PropTypes from "prop-types";

const AccountPageContent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.pageContainer}>
            <Typography variant={"h4"}>Account</Typography>
            <div className={classes.accountInfoContainer}>
                <Avatar src={props.accountImage} alt={props.alternativeName} classes={{
                    root: classes.avatarClass,
                }}/>
                <TextField disabled label={"First Name"} variant={"outlined"} defaultValue={props.name}/>
                <TextField disabled label={"Last Name"} variant={"outlined"} defaultValue={props.lastName}/>
            </div>
        </div>
    );
}

AccountPageContent.propTypes = {alternativeName: PropTypes.string.isRequired,
accountImage: PropTypes.any.isRequired}

export default AccountPageContent;