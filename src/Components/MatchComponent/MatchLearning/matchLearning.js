import PropTypes from "prop-types";
import Kanji from "../../../Models/kanji";
import {useState} from "react";
import useStyle from "./style";
import ReadingField from "../../ReadingField/readingField";

const KUNYOUMI = "field_kunyoumi";
const ONYOUMI = "field_onyoumi";
const ALL = "field_all";

const MatchLearning = (props) => {
    const classes = useStyle();
    const [kunyoumiReadings, setKunyoumiReadings] = useState(["ok1", "ok1++", "ok1+++"]);
    const [onyoumiReadings, setOnyoumiReadings] = useState(["ok2", "ok2++", "ok2+++"]);
    const [readings, setReadings] = useState(["ok3", "ok3++", "ok3+++"]);
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

    return <div>
        <ReadingField currentReadings={kunyoumiReadings} onReadingsCallback={setKunyoumiReadings}
                      fieldName={"Kunyoumi:"}
                      fieldUniqueName={KUNYOUMI} onReadingDropped={onReadingDropped}/>
        <ReadingField currentReadings={onyoumiReadings} onReadingsCallback={setOnyoumiReadings} fieldName={"Onyoumi:"}
                      fieldUniqueName={ONYOUMI} onReadingDropped={onReadingDropped}/>
        <ReadingField currentReadings={readings} onReadingsCallback={setReadings} fieldName={"All readings:"}
                      fieldUniqueName={ALL} onReadingDropped={onReadingDropped}/>
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