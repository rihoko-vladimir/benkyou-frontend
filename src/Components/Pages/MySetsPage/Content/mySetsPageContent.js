import useStyle from "../style";
import {Button, Typography} from "@mui/material";
import CardsStack from "../../../CardsStackComponent/cardsStack";
import {AddOutlined} from "@mui/icons-material";

const MySetsPageContent = () => {
    const classes = useStyle();
    return (
        <div className={classes.pageContainer}>
            <div className={classes.headerContainer}>
                <Typography variant={"h4"}>My Sets</Typography>
                <Button variant={"contained"} size={"large"} endIcon={<AddOutlined/>}>
                    Add new set
                </Button>
            </div>
            <CardsStack/>
        </div>);
}

export default MySetsPageContent;