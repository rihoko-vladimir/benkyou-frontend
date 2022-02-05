import useStyle from "../style";
import {Button, Typography} from "@mui/material";
import CardsStack from "../../../CardsStackComponent/cardsStack";
import {AddOutlined} from "@mui/icons-material";
import EditDialog from "../../CardEditDialog/editDialog";
import {useSelector} from "react-redux";

const MySetsPageContent = () => {
    const classes = useStyle();
    const cards = useSelector(state => state.myCards);
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