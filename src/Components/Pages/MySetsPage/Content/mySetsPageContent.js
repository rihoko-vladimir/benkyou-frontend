import useStyle from "../style";
import {Button, Typography} from "@mui/material";
import CardsStack from "../../../CardsStackComponent/cardsStack";
import {AddOutlined} from "@mui/icons-material";
import Kanji from "../../../../Models/kanji";
import Card from "../../../../Models/card";
import EditDialog from "../../CardEditDialog/editDialog";

const MySetsPageContent = () => {
    const classes = useStyle();
    const cards = [new Card(1, 1, "Default card", "This is my test description", "Me", [
        new Kanji("日1", ["ニチ1", "ジツ1", "ニ1"], ["ひ1", "は1"]),
        new Kanji("日2", ["ニチ2", "ジツ2", "ニ2"], ["ひ2", "は2"]),
        new Kanji("日3", ["ニチ3", "ジツ3", "ニ3"], ["ひ3", "は3"]),
        new Kanji("日4", ["ニチ4", "ジツ4", "ニ4"], ["ひ4", "は4"]),
        new Kanji("日5", ["ニチ5", "ジツ5", "ニ5"], ["ひ5", "は5"]),
        new Kanji("日6", ["ニチ6", "ジツ6", "ニ6"], ["ひ6", "は6"]),])];
    return (
        <div
            className={classes.pageContainer}>
            <EditDialog/>
            <div
                className={classes.headerContainer}>
                <Typography
                    variant={"h4"}>
                    My Sets
                </Typography>
                <Button
                    variant={"contained"}
                    size={"large"}
                    endIcon={<AddOutlined/>}>
                    Add new set
                </Button>
            </div>
            <CardsStack cards={cards}/>
        </div>);
}

export default MySetsPageContent;