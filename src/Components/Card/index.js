import useStyle from "./style";
import {Button, Collapse, IconButton, Link, Tooltip, Typography, Zoom} from "@mui/material";
import PropTypes from "prop-types";
import {Close, ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {openEditDialog, removeSet, selectKanjiList, showSnackbar} from "../../Redux/actions";
import KanjiInfo from "../KanjiInfo";
import {hostUrl} from "../../applicationSettings";
import {ACCOUNT_PATH, HUB_PATH} from "../../Router/paths";

const Card = (props) => {
    const [isOpenButtonPressed, setButtonPressed] = useState(false);
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onOpenButtonPressed = () => setButtonPressed(!isOpenButtonPressed);

    const onBenkyouClicked = () => {
        dispatch(selectKanjiList(props.card.kanjiList));
        navigate("../../study/match")
    }

    const onEditClicked = () => {
        dispatch(openEditDialog(props.card));
    }

    const onDeleteClicked = () => {
        dispatch(removeSet(props.card.id))
    }

    return (
        <div className={classes.card}>
            <div className={classes.topSection}>
                <div className={classes.cardTitle}>
                    <Typography
                        variant={"subtitle1"}>
                        {props.card.name}
                    </Typography>
                    <Typography
                        variant={"subtitle2"}
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}
                    >
                        {props.card.description}
                    </Typography>
                    <Typography
                        variant={"subtitle2"}>
                        Author: <Link
                        underline={"hover"}
                        rel={"noreferrer"}
                        href={`${hostUrl}${HUB_PATH}/${ACCOUNT_PATH}/id/${props.card.id}`}>
                        {props.card.author}
                    </Link>
                    </Typography>
                </div>
                <Tooltip title={"Remove card"} placement={"top"} arrow TransitionComponent={Zoom}>
                    <IconButton onClick={onDeleteClicked}>
                        <Close/>
                    </IconButton>
                </Tooltip>
            </div>
            <div
                className={classes.lowerCardContent}>
                <Collapse
                    in={isOpenButtonPressed}
                    timeout={"auto"}>
                    <div
                        className={classes.kanjiList}>
                        {props.card.kanjiList.map((kanji, index) => (
                            <KanjiInfo
                                kanjiObject={kanji} key={index}/>))}
                    </div>
                </Collapse>
                <div
                    className={classes.buttons}>
                    <Tooltip title={"Expand / Hide"} placement={"bottom"} arrow TransitionComponent={Zoom}>
                        <IconButton
                            onClick={() => onOpenButtonPressed()}>
                            {isOpenButtonPressed ? <ExpandMoreOutlined/> : <ExpandLessOutlined/>}
                        </IconButton>
                    </Tooltip>
                    <div
                        className={classes.actionButtons}>
                        <Button
                            variant={"outlined"}
                            className={classes.button}
                            onClick={onEditClicked}>
                            Edit
                        </Button>
                        <Tooltip title={"Learn!"} placement={"bottom"} arrow TransitionComponent={Zoom}
                                 enterDelay={650}>
                            <Button
                                variant={"contained"}
                                className={classes.button}
                                onClick={onBenkyouClicked}>
                                勉強！
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>);
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;