import useStyle from "./style";
import EditKanjiList from "../EditKanjiList";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setNewCardDescription, setNewCardName} from "../../Redux/actions";

const EditKanji = () => {
    const dispatch = useDispatch();
    const cardName = useSelector(state => state.editCard.name);
    const cardDescription = useSelector(state => state.editCard.description);
    const setCardName = (newCardName) => {
        dispatch(setNewCardName(newCardName))
    }
    const setCardDescription = (newCardDescription) => {
        dispatch(setNewCardDescription(newCardDescription))
    }
    const classes = useStyle();
    return <div className={classes.container}>
        <TextField variant={"outlined"}
                   label={"Card name"}
                   fullWidth
                   value={cardName}
                   onChange={(event) =>
                       setCardName(event.target.value)}
                   inputProps={{maxLength: 15}}
        />
        <TextField variant={"outlined"}
                   label={"Card description"}
                   fullWidth
                   value={cardDescription}
                   onChange={(event) =>
                       setCardDescription(event.target.value)}
                   inputProps={{maxLength: 90}}
        />
        <EditKanjiList/>
    </div>
}

export default EditKanji;