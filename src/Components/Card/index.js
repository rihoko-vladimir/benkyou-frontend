import useStyle from "./style";
import {Button, Collapse, IconButton, Tooltip, Typography, Zoom} from "@mui/material";
import PropTypes from "prop-types";
import {Close, ExpandLessOutlined, ExpandMoreOutlined, FlagOutlined} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createSet, openEditDialog, removeSet, reportSet, selectKanjiList} from "../../Redux/actions";
import KanjiInfo from "../KanjiInfo";

const Card = (props) => {
    const [isOpenButtonPressed, setButtonPressed] = useState(false);
    const [isDeleteClicked, setDeleteClicked] = useState(false);
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.isLoading);

    const onOpenButtonPressed = () => setButtonPressed(!isOpenButtonPressed);

    const onAddClicked = () => {
        dispatch(createSet(props.card))
    }

    const onBenkyouClicked = () => {
        dispatch(selectKanjiList(props.card.kanjiList));
        navigate("../../study/match")
    }

    const onEditClicked = () => {
        dispatch(openEditDialog(props.card));
    }

    const onDeleteClicked = () => {
        setDeleteClicked(true);
        dispatch(removeSet(props.card.id))
    }

    const onReportClicked = () => {
        dispatch(reportSet(props.card.id));
    }

    return (
        <div className={classes.card} style={isDeleteClicked ? {
            backdropFilter: "brightness(0.9)"
        } : {}}>
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
                    {/*<Typography*/}
                    {/*    variant={"subtitle2"}>*/}
                    {/*    Author: <Link*/}
                    {/*    underline={"hover"}*/}
                    {/*    rel={"noreferrer"}*/}
                    {/*    href={`${hostUrl}${HUB_PATH}/${ACCOUNT_PATH}/id/${props.card.id}`}>*/}
                    {/*    {props.card.author}*/}
                    {/*</Link>*/}
                    {/*</Typography>*/}
                </div>
                <div className={classes.topButtons}>
                    {props.manageAble ?
                        <Tooltip title={"Remove set"} placement={"top"} arrow TransitionComponent={Zoom}>
                    <span>
                    <IconButton
                        disabled={isLoading}
                        onClick={onDeleteClicked}>
                        <Close/>
                    </IconButton>
                        </span>
                        </Tooltip> : null}
                    {!props.manageAble ?
                        <Tooltip title={"Report set"} placement={"right"} arrow TransitionComponent={Zoom}>
                    <span>
                    <IconButton
                        disabled={isLoading}
                        onClick={onReportClicked}>
                        <FlagOutlined/>
                    </IconButton>
                        </span>
                        </Tooltip> : null}
                </div>
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
                    <span>
                        <IconButton
                            disabled={isLoading}
                            onClick={() => onOpenButtonPressed()}>
                            {isOpenButtonPressed ? <ExpandMoreOutlined/> : <ExpandLessOutlined/>}
                        </IconButton>
                        </span>
                    <div
                        className={classes.actionButtons}>
                        {props.manageAble ?
                            <Button
                                disabled={isLoading}
                                variant={"outlined"}
                                className={classes.button}
                                onClick={onEditClicked}>
                                Edit
                            </Button> :
                            <Tooltip title={"Add to my sets"} placement={"bottom"} arrow TransitionComponent={Zoom}
                                     enterDelay={650}>
                            <span>
                            <Button
                                disabled={isLoading}
                                variant={"outlined"}
                                className={classes.button}
                                onClick={onAddClicked}>
                            Add
                        </Button>
                                </span>
                            </Tooltip>}
                        <Tooltip title={"Learn!"} placement={"bottom"} arrow TransitionComponent={Zoom}
                                 enterDelay={650}>
                        <span>
                            <Button
                                disabled={isLoading}
                                variant={"contained"}
                                className={classes.button}
                                onClick={onBenkyouClicked}>
                                勉強！
                            </Button>
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>);
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    manageAble: PropTypes.bool.isRequired
}

export default Card;