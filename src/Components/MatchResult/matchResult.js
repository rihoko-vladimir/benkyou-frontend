import PropTypes from "prop-types";
import useStyle from "./style";
import ResultReading, {resultTypes} from "../ResultReading/reading";

const MatchResult = ({kanji, selectedKunyoumi, selectedOnyoumi}) => {
    const classes = useStyle();
    const correctOnyoumi = kanji.onyoumi;
    const correctKunyoumi = kanji.kunyoumi;
    const matchedOnyoumi = correctOnyoumi.filter(x => selectedOnyoumi.includes(x));
    const unmatchedOnyoumi = correctOnyoumi.filter(x => !selectedOnyoumi.includes(x));
    const incorrectOnyoumi = selectedOnyoumi.filter(x => !correctOnyoumi.includes(x));
    const matchedKunyoumi = correctKunyoumi.filter(x => selectedKunyoumi.includes(x));
    const unmatchedKunyoumi = correctKunyoumi.filter(x => !selectedKunyoumi.includes(x));
    const incorrectKunyoumi = selectedOnyoumi.filter(x => !correctOnyoumi.includes(x));
    const isCorrect =
        unmatchedKunyoumi.length === 0 &&
        incorrectKunyoumi.length === 0 &&
        unmatchedOnyoumi.length === 0 &&
        incorrectOnyoumi.length === 0
    return <div className={classes.container} style={isCorrect
        ? {
            borderLeftWidth: "4px",
            borderLeftColor: "green",
            borderStyle: "solid"
        } : {
            borderLeftWidth: "4px",
            borderLeftColor: "red",
            borderStyle: "solid"
        }
    }>
        <p className={classes.kanji}>{kanji.kanji}</p>
        <div className={classes.readingsContainer}>
            <div className={classes.readings}>
                {matchedKunyoumi.map(element => <ResultReading reading={element} type={resultTypes.correct}
                                                               key={Math.round(element.length * 395 * Math.random())}/>)}
                {unmatchedKunyoumi.map(element => <ResultReading reading={element} type={resultTypes.required}
                                                                 key={Math.round(element.length * 395 * Math.random())}/>)}
                {incorrectKunyoumi.map(element => <ResultReading reading={element} type={resultTypes.incorrect}
                                                                 key={Math.round(element.length * 395 * Math.random())}/>)}
            </div>
            <div className={classes.readings}>
                {matchedOnyoumi.map(element => <ResultReading reading={element} type={resultTypes.correct}
                                                              key={Math.round(element.length * 395 * Math.random())}/>)}
                {unmatchedOnyoumi.map(element => <ResultReading reading={element} type={resultTypes.required}
                                                                key={Math.round(element.length * 395 * Math.random())}/>)}
                {incorrectOnyoumi.map(element => <ResultReading reading={element} type={resultTypes.incorrect}
                                                                key={Math.round(element.length * 395 * Math.random())}/>)}
            </div>
        </div>
    </div>
}

export default MatchResult;

MatchResult.propTypes = {
    kanji: PropTypes.object.isRequired,
    selectedKunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    selectedOnyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};