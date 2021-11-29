import useStyle from "./style";
import {Button, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Card = (props) => {
    const classes = useStyle();
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
            </div>
            <div className={classes.buttons}>
                <Button variant={"outlined"} className={classes.button}>
                    Edit
                </Button>
                <Button variant={"contained"} className={classes.button}>
                    勉強！
                </Button>
            </div>
        </div>);
}

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    kanji: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Card;