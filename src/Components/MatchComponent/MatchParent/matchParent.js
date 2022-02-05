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
import {useNavigate} from "react-router";

const MatchParent = () => {
    const dispatch = useDispatch();
    const store = useStore();
    const navigate = useNavigate()
    const data = useSelector(state => state.selectedKanji);
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

    const onNext = ({selectedKunyoumi, selectedOnyoumi}) => {
        dispatch(addCurrentKanjiMatchResult({
            selectedKunyoumi,
            selectedOnyoumi,
            correctKanji: store.getState().randomList[store.getState().learn.currentKanjiIndex]
        }));
        dispatch(setCurrentKanjiIndex(store.getState().learn.currentKanjiIndex + 1));
        dispatch(setCurrentAllReadings(store.getState().randomList, store.getState().learn.currentKanjiIndex));
    }
    const onFinish = ({selectedKunyoumi, selectedOnyoumi}) => {
        console.log("finished")
        dispatch(addCurrentKanjiMatchResult({
            selectedKunyoumi,
            selectedOnyoumi,
            correctKanji: store.getState().randomList[store.getState().learn.currentKanjiIndex]
        }));
        navigate("finish")
    }
    const allReadings = useSelector(state => state.readings);
    const randomedList = useSelector(state => state.randomList);
    const currentKanjiIndex = useSelector(state => state.learn.currentKanjiIndex);
    return <MatchLearning onReturnResults={onNext} allReadings={allReadings}
                          kanji={randomedList[currentKanjiIndex].kanji}
                          isFinal={currentKanjiIndex === randomedList.length - 1} onFinish={onFinish}/>

}

export default MatchParent;