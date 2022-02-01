import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import useStyle from "./style";
import ReadingField from "../../ReadingField/readingField";
import {ArrowForward} from "@mui/icons-material";
import {Button} from "@mui/material";

const KUNYOUMI = "field_kunyoumi";
const ONYOUMI = "field_onyoumi";
const ALL = "field_all";

const MatchLearning = (props) => {
    const classes = useStyle();
    const [kunyoumiReadings, setKunyoumiReadings] = useState([]);
    const [onyoumiReadings, setOnyoumiReadings] = useState([]);
    const [readings, setReadings] = useState(props.allReadings);
    useEffect(() => {
        setReadings(props.allReadings);
        setOnyoumiReadings([]);
        setKunyoumiReadings([]);
    }, [props.allReadings]);
    const fieldTypeMapping = {
        [KUNYOUMI]: {method: setKunyoumiReadings, value: kunyoumiReadings},
        [ONYOUMI]: {method: setOnyoumiReadings, value: onyoumiReadings},
        [ALL]: {method: setReadings, value: readings}
    }
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

    return <div className={classes.rootContainer}>
        <div className={classes.kanjiContainer}>
            <p className={classes.kanji}>{props.kanji}</p>
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
                <Button endIcon={<ArrowForward/>} variant={"outlined"} onClick={() => props.onReturnResults({
                    selectedKunyoumi: kunyoumiReadings,
                    selectedOnyoumi: onyoumiReadings
                })}>Next</Button>
            </div>
        </div>
    </div>
}

MatchLearning.propTypes = {
    allReadings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onReturnResults: PropTypes.func.isRequired,
    kanji: PropTypes.string.isRequired
};

export default MatchLearning;