import useStyle from "./style";
import {Button, Collapse, IconButton, Link, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {ExpandLessOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import {useState} from "react";

const Card = (props) => {
    const [isOpenButtonPressed, setButtonPressed] = useState(false);
    const classes = useStyle();
    const buttons = [];
    const author = "";

    const onOpenButtonPressed = ()=> setButtonPressed(!isOpenButtonPressed);

    return (
        <div className={classes.card}>
            <div className={classes.kanjiBackground}>
                {props.kanji}
            </div>
            <div className={classes.cardTitle}>
                <Typography variant={"subtitle1"}>
                    {props.cardName}
                </Typography>
                <Typography variant={"subtitle2"}>
                    {props.cardDescription}
                </Typography>
                <Typography variant={"subtitle2"}>
                    Author: <Link underline={"hover"} rel={"noreferrer"} href={"#"}>{author}</Link>
                </Typography>
            </div>
            <div className={classes.lowerCardContent}>
                <Collapse in={isOpenButtonPressed} timeout={"auto"}>
                <Typography variant={"subtitle1"} className={classes.displayedKanji}>
                    {props.kanji}
                </Typography>
                </Collapse>
                <div className={classes.buttons}>
                    <IconButton onClick={()=>onOpenButtonPressed()}>
                        {isOpenButtonPressed ? <ExpandMoreOutlined/> : <ExpandLessOutlined/>}
                    </IconButton>
                    <div className={classes.actionButtons}>
                        <Button variant={"outlined"} className={classes.button}>
                            Edit
                        </Button>
                        <Button variant={"contained"} className={classes.button}>
                            勉強！
                        </Button>
                    </div>
                </div>
            </div>

        </div>);
}

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    kanji: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Card;