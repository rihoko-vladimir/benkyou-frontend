import useStyle from "./style";
import {Button, Collapse, IconButton, Link, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {selectKanjiList} from "../../Redux/actions";
import KanjiInfo from "../KanjiInfoComponent/kanjiInfo";

const Card = (props) => {
    const [isOpenButtonPressed, setButtonPressed] = useState(false);
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onOpenButtonPressed = () => setButtonPressed(!isOpenButtonPressed);

    const onBenkyouClicked = () => {
        dispatch(selectKanjiList(props.card.kanjiList));
        navigate("../study/")
    }

    const onEditClicked = () => {

    }

    return (
        <div className={classes.card}>
            <div className={classes.cardTitle}>
                <Typography
                    variant={"subtitle1"}>
                    {props.card.name}
                </Typography>
                <Typography
                    variant={"subtitle2"}>
                    {props.card.description}
                </Typography>
                <Typography
                    variant={"subtitle2"}>
                    Author: <Link
                    underline={"hover"}
                    rel={"noreferrer"}
                    href={"#"}>
                    {props.card.author}
                </Link>
                </Typography>
            </div>
            <div
                className={classes.lowerCardContent}>
                <Collapse
                    in={isOpenButtonPressed}
                    timeout={"auto"}>
                    <div
                        className={classes.kanjiList}>
                        {props.card.kanjiList.map(kanji => (
                            <KanjiInfo
                                kanjiObject={kanji}/>))}
                    </div>
                </Collapse>
                <div
                    className={classes.buttons}>
                    <IconButton
                        onClick={() => onOpenButtonPressed()}>
                        {isOpenButtonPressed ? <ExpandMoreOutlined/> : <ExpandLessOutlined/>}
                    </IconButton>
                    <div
                        className={classes.actionButtons}>
                        <Button
                            variant={"outlined"}
                            className={classes.button}
                            onClick={onEditClicked}
                        >
                            Edit
                        </Button>
                        <Button
                            variant={"contained"}
                            className={classes.button}
                            onClick={onBenkyouClicked}>
                            勉強！
                        </Button>
                    </div>
                </div>
            </div>
        </div>);
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;