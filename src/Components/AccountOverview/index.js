import {Avatar, Badge, Divider, IconButton, Tooltip, Typography, Zoom} from "@mui/material";
import {CameraAltOutlined} from "@mui/icons-material";
import useStyle from "./style";
import {useDispatch, useSelector} from "react-redux";
import {displayImage, getBase64FromImage, openSelector} from "../../HelperMethods/imageHelpers";
import {changeBase64, changeImage} from "../../Redux/actions";

const AccountOverview = () =>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const tabValue = useSelector(state => state.accountPage.tabValue)
    const cardsCount = useSelector(state => state.myCards.length)
    const firstName = useSelector(state => state.account.firstName);
    const lastName = useSelector(state => state.account.lastName);
    const avatarUrl = useSelector(state => state.account.accountImageUrl);
    const image = useSelector(state => state.accountPage.accountImage)
    const onChangeAvatar = () => {
        openSelector((file) => {
            getBase64FromImage(file,
                (base64) => dispatch(changeBase64(base64)),
                (errorMessage) => console.log(errorMessage))
            displayImage(file, (image) => dispatch(changeImage(image)))
        })
    }
    return (
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
                           badgeContent={
                               <Zoom in={tabValue === "2"}>
                                   <IconButton disabled={tabValue !== "2"}
                                               onClick={onChangeAvatar}
                                               style={{backgroundColor: "white"}}>
                                       <CameraAltOutlined/>
                                   </IconButton>
                               </Zoom>}>
                        <Avatar
                            src={image || avatarUrl}
                            classes={{
                                root: classes.avatarClass,
                            }}/>
                    </Badge>
                    <Typography variant={"subtitle1"}>
                        {`${firstName} ${lastName}`}
                    </Typography>
                </div>
            </div>
            <div
                className={classes.bottomStatistics}>
                <Typography>
                    <Tooltip title={"Sets Created"} placement={"top"} arrow TransitionComponent={Zoom}>
                        <Typography>{cardsCount}</Typography>
                    </Tooltip>
                </Typography>
                <Divider
                    variant={"middle"}
                    orientation={"vertical"}/>
                <Tooltip title={"Correct/All"} placement={"top"} arrow TransitionComponent={Zoom}>
                <Typography>
                    12/30
                </Typography>
                </Tooltip>
                <Divider
                    variant={"middle"}
                    orientation={"vertical"}/>
                <Tooltip title={"Last time studied"} placement={"top"} arrow TransitionComponent={Zoom}>
                <Typography>
                    Today
                </Typography>
                </Tooltip>
            </div>
        </div>
    )
}

export default AccountOverview;