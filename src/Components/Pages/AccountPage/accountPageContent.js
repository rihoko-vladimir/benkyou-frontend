import {Avatar, Divider, TextField, Typography} from "@mui/material";
import useStyles from "./style";
import PropTypes from "prop-types";
import {useState} from "react";

const AccountPageContent = (props) => {
    const classes = useStyles();
    const [isEditable, setEditable] = useState();
    const date = new Date();
    return (
        <div className={classes.pageContainer}>
            <Typography variant={"h4"}>Account</Typography>
            <div className={classes.accountMainContainer}>
                <div className={classes.accountInfoContainer}>
                    <div>
                        <Typography variant={"h5"}>Summary</Typography>
                        <div className={classes.topInfo}>
                            <Avatar src={props.accountImage} alt={props.alternativeName} classes={{
                                root: classes.avatarClass,
                            }}/>
                            <Typography variant={"subtitle1"}>{`${props.name} ${props.lastName}`}</Typography>
                        </div>
                    </div>
                    <div className={classes.bottomStatistics}>
                        <Typography>0</Typography>
                        <Divider variant={"middle"} orientation={"vertical"}/>
                        <Typography>0</Typography>
                        <Divider variant={"middle"} orientation={"vertical"}/>
                        <Typography>0</Typography>
                    </div>
                </div>
                <div className={classes.mainAccountContainer}>
                    <Typography variant={"h5"}>Personal Info</Typography>
                    <div className={classes.mainAccountContent}>
                        <div className={classes.nameAndSurname}>
                            <TextField
                                disabled
                                label="First Name"
                                defaultValue={props.name}
                                fullWidth
                            />
                            <TextField
                                disabled
                                label="Last Name"
                                defaultValue={props.lastName}
                                fullWidth
                            />
                        </div>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue={date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}
                            sx={{width: 220}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

AccountPageContent.propTypes = {
    alternativeName: PropTypes.string.isRequired,
    accountImage: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default AccountPageContent;