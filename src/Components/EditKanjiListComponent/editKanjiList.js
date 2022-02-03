import PropTypes from "prop-types";
import EditKanjiElement from "../EditKanjiElement/editKanjiElement";
import {Divider} from "@mui/material";

const EditKanjiList = (props) => {
    return <div>
        <Divider/>
        {props.kanjiList.map(kanji => <EditKanjiElement kanji={kanji}/>)}
        <Divider/>
    </div>;
}

EditKanjiList.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default EditKanjiList;