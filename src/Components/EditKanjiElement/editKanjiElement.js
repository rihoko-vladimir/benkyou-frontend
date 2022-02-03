import PropTypes from "prop-types";
import useStyle from "./style";
import {Divider, TextField} from "@mui/material";
import {useState} from "react";
import ChipInput from "../ChipInput/chipInput";

const EditKanjiElement = (props) => {
    const classes = useStyle();
    const [kanji, setKanji] = useState(props.kanji.kanji);
    const [kunyoumi, setKunyoumi] = useState(props.kanji.kunyoumi);
    const [onyoumi, setOnyoumi] = useState(props.kanji.onyoumi);
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
    return <div className={classes.container}>
        <TextField label={"Kanji"} className={classes.kanji} fullWidth variant={"outlined"} value={kanji}
                   onChange={(event) => setKanji(event.target.value)} inputProps={{maxLength: 1}}/>
        <div className={classes.readingsContainer}>
            <div className={classes.readings}>
                <ChipInput fullWidth variant={"outlined"} value={kunyoumi} allowDuplicates={false} label={"Kunyoumi"}
                           onAdd={addKunyoumi} onDelete={deleteKunyoumi}/>
            </div>
            <Divider/>
            <div className={classes.readings}>
                <ChipInput fullWidth variant={"outlined"} value={onyoumi} allowDuplicates={false} label={"Onyoumi"}
                           onAdd={addOnyoumi} onDelete={deleteOnyoumi}/>
            </div>
        </div>
    </div>
}

EditKanjiElement.propTypes = {
    kanji: PropTypes.object.isRequired
};

export default EditKanjiElement;