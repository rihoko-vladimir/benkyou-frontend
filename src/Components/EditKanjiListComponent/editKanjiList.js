import EditKanjiElement from "../EditKanjiElement/editKanjiElement";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";

const EditKanjiList = () => {
    const kanjiList = useSelector(state => state.editCard.kanjiList);
    return <div>
        <Divider/>
        {kanjiList.map((kanji, index) => <EditKanjiElement kanji={kanji} index={index} key={index}/>)}
        <Divider/>
    </div>;
}

export default EditKanjiList;