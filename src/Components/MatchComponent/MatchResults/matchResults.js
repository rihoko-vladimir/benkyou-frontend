import {useDispatch, useSelector} from "react-redux";
import {finishMatchLearning} from "../../../Redux/actions";

const MatchResults = () => {
    const results = useSelector(state => state.results);
    const dispatch = useDispatch();
    dispatch(finishMatchLearning());
    return <p>Results: {results}</p>
}

export default MatchResults;