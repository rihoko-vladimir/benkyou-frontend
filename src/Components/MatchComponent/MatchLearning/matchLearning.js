import PropTypes from "prop-types";
import Kanji from "../../../Models/kanji";
import {useState} from "react";
import useStyle from "./style";
import DraggableReading from "../../DraggableReading/draggableReading";
import ReadingField from "../../ReadingField/readingField";

const MatchLearning = (props) => {
    const classes = useStyle();
    const [readings, setReadings] = useState(["ok", "ok++", "ok+++"]);
    const sampleData = props.kanjiList || [new Kanji("日", ["ニチ", "ジツ", "ニ"], ["ひ", "は"])];
    const data = sampleData.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    const [currentKanjiIndex, setCurrentKanjiIndex] = useState(0);

    return <div>
        <ReadingField currentReadings={readings} onReadingsCallback={(readings)=>{
            console.log(readings)
        }
        }/>
        <DraggableReading reading={"+++"}/>
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