import EditKanjiElement from "../KanjiDescriptionEditor";
import {IconButton, Tooltip, Zoom} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {PlaylistAdd} from "@mui/icons-material";
import {addKanji} from "../../Redux/actions";

const EditKanjiList = () => {
    const kanjiList = useSelector(state => state.editCard.kanjiList);
    const dispatch = useDispatch();
    const addNewKanji = () => {
        dispatch(addKanji())
    }
    return <div>
        {kanjiList.map((kanji, index) => <EditKanjiElement kanji={kanji} index={index} key={index} listLength={kanjiList.length}/>)}
        <Tooltip title={"Add new kanji"} placement={"bottom"} arrow TransitionComponent={Zoom}>
            <IconButton onClick={addNewKanji}>
                <PlaylistAdd/>
            </IconButton>
        </Tooltip>
    </div>;
}

export default EditKanjiList;