import PropTypes from "prop-types";
import {Button} from "@mui/material";
import useStyle from "../style";
import {useState} from "react";

const modes = {
    NONE: "none",
    GUESS: "guess",
    MATCH: "match"
}

const StudyPage = (props) => {
    const classes = useStyle();
    const [selectedMode, setSelectedMode] = useState(modes.NONE);
    const onMatchClickListener = () => {
        setSelectedMode(modes.MATCH);
    };
    const onGuessClickListener = () => {
        setSelectedMode(modes.GUESS)
    };
    switch (selectedMode){
        case modes.NONE:
            return <div className={classes.container}>
                <Button variant={"outlined"} onClick={onMatchClickListener}>Match readings with kanji</Button>
                <Button variant={"outlined"} onClick={onGuessClickListener}>Guess kanji by reading</Button>
            </div>
        case modes.GUESS:{
            return <div className={classes.container}>
                <p>Guess mode</p>
            </div>
        }
        case modes.MATCH:{
            return <div className={classes.container}>
                <p>Match mode</p>
            </div>
        }
    }
}

StudyPage.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default StudyPage;