import {Button} from "@mui/material";
import LearnContainer from "../../../LearnContainerComponent/LearnContainer";
import {useNavigate} from "react-router";
import {GUESS_PATH, MATCH_PATH} from "../../../Router/paths";

const StudyPage = () => {
    const navigate = useNavigate();
    const onMatchClickListener = () => {
        navigate(MATCH_PATH);
    };
    const onGuessClickListener = () => {
        navigate(GUESS_PATH);
    };
    return <LearnContainer
        render={<div>
            <Button variant={"outlined"} onClick={onMatchClickListener}>Match readings with kanji</Button>
            <Button variant={"outlined"} onClick={onGuessClickListener}>Guess kanji by reading</Button></div>}/>
}

export default StudyPage;