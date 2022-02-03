import useStyle from "./style";
import PropTypes from "prop-types";
import EditKanjiList from "../EditKanjiListComponent/editKanjiList";
import {TextField} from "@mui/material";
import {useState} from "react";

const EditKanji = (props) => {
    const [cardName, setCardName] = useState(props.card.name);
    const [cardDescription, setCardDescription] = useState(props.card.description);
    const classes = useStyle();
    return <div className={classes.container}>
        <TextField variant={"outlined"} label={"Card name"} fullWidth value={cardName}
                   onChange={(event) => setCardName(event.target.value)}/>
        <TextField variant={"outlined"} label={"Card description"} fullWidth value={cardDescription}
                   onChange={(event) => setCardDescription(event.target.value)}/>
        <EditKanjiList kanjiList={props.card.kanjiList}/>
    </div>
}

EditKanji.propTypes = {
    card: PropTypes.object.isRequired
};

export default EditKanji;