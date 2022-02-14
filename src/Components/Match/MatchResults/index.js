import {useDispatch, useSelector} from "react-redux";
import {Button, Typography} from "@mui/material";
import useStyle from "./style";
import MatchResult from "../../MatchResult";
import {Check, Refresh} from "@mui/icons-material";
import {finishMatchLearning} from "../../../Redux/actions";
import {useNavigate} from "react-router";

const MatchResults = () => {
    const results = useSelector(state => state.results);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyle();
    const clear = () => {
        dispatch(finishMatchLearning());
    }
    const onRestart = () => {
        clear();
        navigate("../");
    }
    const onFinish = () => {
        clear();
        navigate("../../../hub/my-sets");
    }
    console.log(results)
    return <div className={classes.container}>
        <div className={classes.titleAndResults}>
            <Typography variant={"h4"}>
                Results
            </Typography>
            <div className={classes.resultsContainer}>
                {results.map(result => <MatchResult kanji={result.correctKanji}
                                                    selectedKunyoumi={result.selectedKunyoumi}
                                                    selectedOnyoumi={result.selectedOnyoumi}
                                                    key={Math.round(Math.random() * 582 + result.selectedOnyoumi.length - result.selectedKunyoumi.length)}
                    />
                )}
            </div>
        </div>
        <div className={classes.buttons}>
            <Button variant={"outlined"} startIcon={<Refresh/>} onClick={onRestart}>Retry</Button>
            <Button variant={"contained"} endIcon={<Check/>} onClick={onFinish}>Finish</Button>
        </div>
    </div>
}

export default MatchResults;
