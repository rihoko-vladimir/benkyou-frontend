import {Avatar, Badge, Button, Divider, IconButton, TextField, Tooltip, Typography, Zoom} from "@mui/material";
import useStyles from "../style";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {changePassword} from "../../../Redux/actions";
import {CameraAltOutlined} from "@mui/icons-material";
import {getBase64File, getBase64FromUserImage} from "../../../HelperMethods/imageHelpers";

const AccountPageContent = (props) => {
    const classes = useStyles();
    const [isEditable, setEditable] = useState(false);
    const [temporaryName, setTemporaryName] = useState(props.firstName);
    const [temporaryLastName, setTemporaryLastName] = useState(props.lastName);
    const [temporaryAbout, setTemporaryAbout] = useState(props.aboutAccount);
    const [temporaryBirthday, setTemporaryBirthday] = useState(props.birthday);
    const [temporaryAccountImage, setTemporaryAccountImage] = useState(props.accountImage);
    const [temporaryLogin, setTemporaryLogin] = useState(props.login);
    const [temporaryEmail, setTemporaryEmail] = useState(props.email);
    const [temporaryPassword, setTemporaryPassword] = useState("");
    const dispatch = useDispatch();

    const editPage = () => {
        setEditable(true);
    };

    const onCancel = () => {
        setEditable(false);
    }

    const saveChanges = () => {
        setEditable(false);
        // validate if password is correct TODO
        dispatch(changePassword(temporaryPassword));
        //TODO Implement account image change
    };

    const onChangeAvatar = () => {
        console.log("Change clicked")
        getBase64FromUserImage((base64)=>console.log(base64), (errorMessage) => console.log(errorMessage))
    }

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
                            <Badge anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                                   overlap="circular"
                                   badgeContent={<IconButton disabled={!isEditable}
                                                             onClick={onChangeAvatar}
                                                             style={
                                                                 {backgroundColor: "white"}}>
                                       <CameraAltOutlined/>
                                   </IconButton>}>
                                <Avatar
                                    src={temporaryAccountImage}
                                    classes={{
                                        root: classes.avatarClass,
                                    }}/>
                            </Badge>
                            <Typography variant={"subtitle1"}>
                                {`${props.firstName} ${props.lastName}`}
                            </Typography>
                        </div>
                    </div>
                    <div
                        className={classes.bottomStatistics}>
                        <Typography>
                            <Tooltip title={"Sets Created"} placement={"top"} arrow TransitionComponent={Zoom}>
                                <Typography>{props.cardsCount}</Typography>
                            </Tooltip>
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
                                <div className={classes.dividedTextFields}>
                                    <TextField
                                        label="Login"
                                        type="text"
                                        fullWidth
                                        value={temporaryLogin}
                                        onChange={(event) => setTemporaryLogin(event.target.value)}
                                        disabled={!isEditable}
                                    />
                                    <TextField
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        value={temporaryEmail}
                                        onChange={(event) => setTemporaryEmail(event.target.value)}
                                        disabled={true}
                                    />
                                </div>
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    value={temporaryBirthday}
                                    fullWidth
                                    onChange={(event) =>
                                        setTemporaryBirthday(event.target.value)}
                                    sx={{width: 220}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    disabled={!isEditable}
                                />
                                <TextField
                                    label={"Password"}
                                    type={"password"}
                                    value={temporaryPassword}
                                    onChange={(event) => setTemporaryPassword(event.target.value)}
                                    disabled={true}
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
                    <div className={classes.buttons}>
                        <Button
                            onClick={onCancel}
                            style={isEditable ? {visibility: "visible"} : {visibility: "hidden"}}>
                            Cancel
                        </Button>
                        <Button
                            variant={isEditable
                                ? "contained"
                                : "outlined"}
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
        </div>
    );
}

AccountPageContent.propTypes = {
    accountImage: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    aboutAccount: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default AccountPageContent;