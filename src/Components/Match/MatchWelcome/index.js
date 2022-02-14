import PropTypes from "prop-types";
import {Button, Typography} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import useStyle from "./style";

const MatchWelcome = () => {
    const classes = useStyle();
    return <div className={classes.rootContainer}>
        <div>
            <Typography variant={"h5"}>Match!</Typography>
            <Typography variant={"subtitle1"}>You need to match readings with kanji, that is going to be displayed. Good
                luck!</Typography>
        </div>
        <div className={classes.buttonContainer}><Button variant={"outlined"} endIcon={<ArrowForward/>}>Start</Button></div>
    </div>
}

MatchWelcome.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default MatchWelcome;

