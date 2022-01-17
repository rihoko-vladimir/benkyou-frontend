import {Avatar, Button, Divider, TextField, Typography} from "@mui/material";
import useStyles from "./style";
import PropTypes from "prop-types";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeAboutInfo, changeBirthDate, changeFirstName, changeLastName} from "../../../Redux/actions";

const AccountPageContent = (props) => {

    const classes = useStyles();
    const [isEditable, setEditable] = useState(false);
    const [temporaryName, setTemporaryName] = useState(props.firstName);
    const [temporaryLastName, setTemporaryLastName] = useState(props.lastName);
    const [temporaryAbout, setTemporaryAbout] = useState(props.aboutAccount);
    const [temporaryBirthday, setTemporaryBirthday] = useState(props.birthday);
    const [temporaryAccountImage, setTemporaryAccountImage] = useState(props.accountImage);
    const dispatch = useDispatch();

    const editPage = () => {
        setEditable(true);
    };

    const saveChanges = () => {
        setEditable(false);
        if (!(temporaryName === props.firstName))
            dispatch(changeFirstName(temporaryName));
        if (!(temporaryLastName === props.lastName))
            dispatch(changeLastName(temporaryLastName));
        if (!(temporaryAbout === props.aboutAccount))
            dispatch(changeAboutInfo(temporaryAbout));
        if (!(temporaryBirthday === props.birthday))
            dispatch(changeBirthDate(temporaryBirthday));
        //account image url will be there in not distant future
        //TODO Implement account image change
    };

    return (
        <div
            className={classes.pageContainer}>
            <Typography
                variant={"h4"}>
                Account
            </Typography>
            <div
                className={classes.accountMainContainer}>
                <div
                    className={classes.accountInfoContainer}>
                    <div>
                        <Typography
                            variant={"h5"}>
                            Summary
                        </Typography>
                        <div
                            className={classes.topInfo}>
                            <Avatar
                                src={temporaryAccountImage}
                                classes={{
                                    root: classes.avatarClass,
                                }}/>
                            <Typography variant={"subtitle1"}>
                                {`${props.firstName} ${props.lastName}`}
                            </Typography>
                        </div>
                    </div>
                    <div
                        className={classes.bottomStatistics}>
                        <Typography>
                            0
                        </Typography>
                        <Divider
                            variant={"middle"}
                            orientation={"vertical"}/>
                        <Typography>
                            0
                        </Typography>
                        <Divider
                            variant={"middle"}
                            orientation={"vertical"}/>
                        <Typography>
                            0
                        </Typography>
                    </div>
                </div>
                <div
                    className={classes.mainAccountContainer}>
                    <div>
                        <Typography
                            variant={"h5"}>
                            Personal Info
                        </Typography>
                        <div>
                            <div
                                className={classes.mainAccountContent}>
                                <div
                                    className={classes.nameAndSurname}>
                                    <TextField
                                        disabled={!isEditable}
                                        label="First Name"
                                        value={temporaryName}
                                        onChange={(event) =>
                                            setTemporaryName(event.target.value)}
                                        fullWidth
                                    />
                                    <TextField
                                        disabled={!isEditable}
                                        label="Last Name"
                                        value={temporaryLastName}
                                        onChange={(event) =>
                                            setTemporaryLastName(event.target.value)}
                                        fullWidth
                                    />
                                </div>
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    value={temporaryBirthday}
                                    onChange={(event) =>
                                        setTemporaryBirthday(event.target.value)}
                                    sx={{width: 220}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    disabled={!isEditable}
                                />
                                <TextField
                                    label="About me"
                                    multiline
                                    rows={4}
                                    value={temporaryAbout}
                                    onChange={(event) =>
                                        setTemporaryAbout(event.target.value)}
                                    variant="outlined"
                                    disabled={!isEditable}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        variant={isEditable
                            ? "contained"
                            : "outlined"}
                        className={classes.editButton}
                        onClick={!isEditable
                            ? () => editPage()
                            : () => saveChanges()}>
                        {isEditable
                            ? "Save"
                            : "Edit"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

AccountPageContent.propTypes = {
    accountImage: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    aboutAccount: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
}

export default AccountPageContent;