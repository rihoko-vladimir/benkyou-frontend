import useStyle from "../style";
import {Button, Typography} from "@mui/material";
import CardsStack from "../../../Components/CardsStack";
import {AddOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {openCreateDialog} from "../../../Redux/actions";
import Card from "../../../Models/card";
import {uid} from "uid";
import Kanji from "../../../Models/kanji";

const MySetsPageContent = () => {
    const classes = useStyle();
    const dispatch = useDispatch()
    const cards = useSelector(state => state.myCards);
    const accountId = useSelector(state => state.account.accountId)
    const onCreateNewSet = () => {
        dispatch(openCreateDialog(new Card(uid(4), accountId, "", "", "Me", [
            new Kanji("", [], []),
            new Kanji("", [], []),
            new Kanji("", [], [])])));
    }
    return (
        <div
            className={classes.pageContainer}>
            <div
                className={classes.headerContainer}>
                <Typography
                    variant={"h4"}>
                    My Sets
                </Typography>
                <Button
                    variant={"contained"}
                    size={"large"}
                    onClick={onCreateNewSet}
                    endIcon={<AddOutlined/>}>
                    Add new set
                </Button>
            </div>
            <CardsStack cards={cards}/>
        </div>);
}

export default MySetsPageContent;