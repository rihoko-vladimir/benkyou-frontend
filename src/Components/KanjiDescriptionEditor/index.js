import PropTypes from "prop-types";
import useStyle from "./style";
import {IconButton, TextField, Tooltip, Zoom} from "@mui/material";
import ChipInput from "../ChipInput";
import {useDispatch} from "react-redux";
import {deleteKanji, setNewKanji, setNewKunyoumi, setNewOnyoumi} from "../../Redux/actions";
import {PlaylistRemove} from "@mui/icons-material";

const EditKanjiElement = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const kunyoumi = props.kanji.kunyoumi;
    const onyoumi = props.kanji.onyoumi
    const kanji = props.kanji.kanji;
    const setKunyoumi = (newKunyoumiArray) => {
        dispatch(setNewKunyoumi(newKunyoumiArray, props.index));
    }
    const setOnyoumi = (newOnyoumiArray) => {
        dispatch(setNewOnyoumi(newOnyoumiArray, props.index));
    }
    const setKanji = (newKanji) => {
        dispatch(setNewKanji(newKanji, props.index));
    }

    const addKunyoumi = (newReading) => {
        setKunyoumi([...kunyoumi, newReading])
    }
    const deleteKunyoumi = (readingToRemove) => {
        setKunyoumi([...kunyoumi.filter(reading => reading !== readingToRemove)])
    }
    const addOnyoumi = (newReading) => {
        setOnyoumi([...onyoumi, newReading])
    }
    const deleteOnyoumi = (readingToRemove) => {
        setOnyoumi([...onyoumi.filter(reading => reading !== readingToRemove)])
    }
    const removeKanji = () => {
        dispatch(deleteKanji(props.index));
    }
    return <div className={classes.container}>
        <TextField label={"漢字"} className={classes.kanji} fullWidth variant={"outlined"} value={kanji}
                   onChange={(event) => setKanji(event.target.value)} inputProps={{maxLength: 1}}/>
        <div className={classes.readingsContainer}>
            <div className={classes.readings}>
                <ChipInput fullWidth variant={"filled"} value={kunyoumi} allowDuplicates={false}
                           label={"Kunyomi"}
                           onAdd={addKunyoumi} onDelete={deleteKunyoumi}/>
            </div>
            <div className={classes.readings}>
                <ChipInput fullWidth variant={"filled"} value={onyoumi} allowDuplicates={false}
                           label={"Onyomi"}
                           onAdd={addOnyoumi} onDelete={deleteOnyoumi}/>
            </div>
        </div>
        <Tooltip title={"Remove this kanji"} placement={"right"} arrow TransitionComponent={Zoom}>
            <IconButton onClick={removeKanji} disabled={props.listLength<=3}>
                <PlaylistRemove/>
            </IconButton>
        </Tooltip>
    </div>
}

EditKanjiElement.propTypes = {
    index: PropTypes.number.isRequired,
    kanji: PropTypes.object.isRequired,
    listLength: PropTypes.number.isRequired
};

export default EditKanjiElement;