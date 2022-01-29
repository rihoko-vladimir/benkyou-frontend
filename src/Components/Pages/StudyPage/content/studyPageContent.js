import PropTypes from "prop-types";
import {Button} from "@mui/material";
import {useState} from "react";
import MatchWelcome from "../../../MatchComponent/MatchWelcome/match";
import Guess from "../../../GuessComponent/guess";
import LearnContainer from "../../../LearnContainerComponent/LearnContainer";
import MatchLearning from "../../../MatchComponent/MatchLearning/matchLearning";

const modes = {
    NONE: "none",
    GUESS: "guess",
    MATCH: "match"
}

const StudyPage = (props) => {
    const [selectedMode, setSelectedMode] = useState(modes.NONE);
    const onMatchClickListener = () => {
        setSelectedMode(modes.MATCH);
    };
    const onGuessClickListener = () => {
        setSelectedMode(modes.GUESS)
    };
    switch (selectedMode) {
        case modes.NONE:
            return <LearnContainer
                render={<div>
                    <Button variant={"outlined"} onClick={onMatchClickListener}>Match readings with kanji</Button>
                    <Button variant={"outlined"} onClick={onGuessClickListener}>Guess kanji by reading</Button></div>}/>
        case modes.GUESS:
            return <LearnContainer render={<Guess/>}/>

        case modes.MATCH:
            return <LearnContainer render={<MatchLearning/>}/>

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