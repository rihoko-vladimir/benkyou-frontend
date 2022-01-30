import PropTypes from "prop-types";
import Kanji from "../../../Models/kanji";
import {useState} from "react";
import useStyle from "./style";
import ReadingField from "../../ReadingField/readingField";
import {ArrowForward} from "@mui/icons-material";
import {Button} from "@mui/material";

const KUNYOUMI = "field_kunyoumi";
const ONYOUMI = "field_onyoumi";
const ALL = "field_all";

const MatchLearning = (props) => {
    const classes = useStyle();
    const [kunyoumiReadings, setKunyoumiReadings] = useState(["ok1", "ok1++", "ok1+++"]);
    const [onyoumiReadings, setOnyoumiReadings] = useState(["ok2", "ok2++", "ok2+++"]);
    const [readings, setReadings] = useState(["ok3", "ok3++", "ok3+++"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const fieldTypeMapping = {
        [KUNYOUMI]: {method: setKunyoumiReadings, value: kunyoumiReadings},
        [ONYOUMI]: {method: setOnyoumiReadings, value: onyoumiReadings},
        [ALL]: {method: setReadings, value: readings}
    }
    const sampleData = props.kanjiList || [new Kanji("日", ["ニチ", "ジツ", "ニ"], ["ひ", "は"])];
    const onReadingDropped = ({from, to, reading}) => {
        console.log(`from: ${from} to: ${to} reading: ${reading}`);
        if (from === to) return
        const fromValue = fieldTypeMapping[from].value;
        const fromMethod = fieldTypeMapping[from].method;
        fromMethod(fromValue.filter(element => element !== reading));
        const toValue = fieldTypeMapping[to].value;
        const toMethod = fieldTypeMapping[to].method;
        toMethod([...toValue, reading])
    }
    const data = sampleData.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    return <div className={classes.rootContainer}>
        <div className={classes.kanjiContainer}>
            <p className={classes.kanji}>{data[currentIndex].kanji}</p>
            <div className={classes.kanjiReadings}>
                <ReadingField currentReadings={kunyoumiReadings} onReadingsCallback={setKunyoumiReadings}
                              fieldName={"Kunyoumi:"}
                              fieldUniqueName={KUNYOUMI} onReadingDropped={onReadingDropped}/>
                <ReadingField currentReadings={onyoumiReadings} onReadingsCallback={setOnyoumiReadings}
                              fieldName={"Onyoumi:"}
                              fieldUniqueName={ONYOUMI} onReadingDropped={onReadingDropped}/>
            </div>

        </div>
        <div className={classes.allReadingsAndButtons}>
            <ReadingField currentReadings={readings} fieldName={"Readings:"} fieldUniqueName={ALL}
                          onReadingDropped={onReadingDropped}/>
            <div className={classes.button}>
                <Button endIcon={<ArrowForward/>} variant={"outlined"}>Next</Button>
            </div>
        </div>
    </div>
}

MatchLearning.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default MatchLearning;