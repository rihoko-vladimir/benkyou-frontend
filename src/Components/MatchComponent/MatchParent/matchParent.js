import PropTypes from "prop-types";
import Kanji from "../../../Models/kanji";
import MatchLearning from "../MatchLearning/matchLearning";
import {useDispatch, useSelector, useStore} from "react-redux";
import {
    addCurrentKanjiMatchResult,
    setCurrentAllReadings,
    setCurrentKanjiIndex,
    setRandomList,
    startMatch
} from "../../../Redux/actions";

const MatchParent = (props) => {
    const dispatch = useDispatch();
    const store = useStore();
    const data = props.kanjiList || [
        new Kanji("日1", ["ニチ1", "ジツ1", "ニ1"], ["ひ1", "は1"]),
        new Kanji("日2", ["ニチ2", "ジツ2", "ニ2"], ["ひ2", "は2"]),
        new Kanji("日3", ["ニチ3", "ジツ3", "ニ3"], ["ひ3", "は3"]),
        new Kanji("日4", ["ニチ4", "ジツ4", "ニ4"], ["ひ4", "は4"]),
        new Kanji("日5", ["ニチ5", "ジツ5", "ニ5"], ["ひ5", "は5"]),
        new Kanji("日6", ["ニチ6", "ジツ6", "ニ6"], ["ひ6", "は6"]),
    ];
    const isMatching = useSelector(state => state.learn.isMatching);
    if (!isMatching) {
        dispatch(setRandomList(data));
        console.log("Random after dispatch in store");
        for (const element in store.getState().randomList) {
            console.log(store.getState().randomList[element])
        }
        dispatch(setCurrentKanjiIndex(0));
        dispatch(setCurrentAllReadings(store.getState().randomList, 0));
        dispatch(startMatch());
    }

    const onReturnResults = ({selectedKunyoumi, selectedOnyoumi}) => {
        dispatch(addCurrentKanjiMatchResult({selectedKunyoumi, selectedOnyoumi}));
        dispatch(setCurrentKanjiIndex(store.getState().learn.currentKanjiIndex + 1));
        dispatch(setCurrentAllReadings(store.getState().readings, store.getState().learn.currentKanjiIndex));
    }
    const allReadings = useSelector(state => state.readings);
    const randomedList = useSelector(state => state.randomList);
    const currentKanjiIndex = useSelector(state => state.learn.currentKanjiIndex);
    return <MatchLearning onReturnResults={onReturnResults} allReadings={allReadings}
                          kanji={randomedList[currentKanjiIndex].kanji}/>

}

MatchParent.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default MatchParent;