import {
    Avatar,
    Backdrop,
    Badge,
    Button, CircularProgress,
    Divider,
    IconButton,
    TextField,
    Tooltip,
    Typography,
    Zoom
} from "@mui/material";
import useStyles from "../style";
import PropTypes from "prop-types";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeUserAccountInfo} from "../../../Redux/actions";
import {CameraAltOutlined} from "@mui/icons-material";
import {displayImage, getBase64FromImage, openSelector} from "../../../HelperMethods/imageHelpers";

const AccountPageContent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isEditable, setEditable] = useState(false);
    const [temporaryName, setTemporaryFirstName] = useState(props.firstName);
    const [temporaryLastName, setTemporaryLastName] = useState(props.lastName);
    const [temporaryAbout, setTemporaryAbout] = useState(props.aboutAccount);
    const [temporaryBirthday, setTemporaryBirthday] = useState(props.birthday);
    const [temporaryAccountImage, setTemporaryAccountImage] = useState(props.accountImage);
    const [temporaryLogin, setTemporaryLogin] = useState(props.login);
    const [temporaryEmail, setTemporaryEmail] = useState(props.email);
    const [temporaryPassword, setTemporaryPassword] = useState("");
    const [imageBase64, setImageBase64] = useState("");
    const isLoading = useSelector(state => state.isLoading);

    const editPage = () => {
        setEditable(true);
    };

    const onCancel = () => {
        setTemporaryFirstName(props.firstName);
        setTemporaryLastName(props.lastName);
        setTemporaryLogin(props.login);
        setTemporaryAccountImage(props.accountImage);
        setTemporaryAbout(props.about);
        setTemporaryBirthday(props.birthday);
        setTemporaryAccountImage("");
        setImageBase64("");
        setEditable(false);
    }

    const saveChanges = () => {
        setEditable(false);
        // validate if password is correct TODO
        dispatch(changeUserAccountInfo(
            {
                userName: temporaryLogin,
                firstName: temporaryName,
                lastName: temporaryLastName,
                about: temporaryAbout,
                birthday: temporaryBirthday,
                avatar: imageBase64
            }
        ))
        //TODO Implement account image change
    };

    const onChangeAvatar = () => {
        console.log("Change clicked")
        openSelector((file) => {
            getBase64FromImage(file,
                (base64) => setImageBase64(base64),
                (errorMessage) => console.log(errorMessage))
            displayImage(file, (image) => setTemporaryAccountImage(image))
        })
    }

    return (
        <div
            className={classes.pageContainer}>
            <Backdrop
                open={isLoading}
                sx={{color: '#fff', zIndex: 999999}}
            >
                <CircularProgress/>
            </Backdrop>
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
                                   badgeContent={<Zoom in={isEditable}><IconButton disabled={!isEditable}
                                                                                   onClick={onChangeAvatar}
                                                                                   style={
                                                                                       {backgroundColor: "white"}}>
                                       <CameraAltOutlined/>
                                   </IconButton></Zoom>}>
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
                                            setTemporaryFirstName(event.target.value)}
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