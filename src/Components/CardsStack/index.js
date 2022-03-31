import useStyle from "./style";
import PropTypes from "prop-types";
import Card from "../Card";
import {Typography} from "@mui/material";

const CardsStack = (props) => {
    const info = props.cards;
    const classes = useStyle();
    return (
        info.length !== 0
            ? <div className={classes.mainContainer}>
                <div className={classes.cardsContainer}>
                    {(info).map(card =>
                        <Card card={card} key={card.id} manageAble={props.manageAble}/>
                    )}
                </div>
            </div> :
            <Typography variant={"h6"}>It's kinda empty here...</Typography>
    )
}

CardsStack.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    manageAble: PropTypes.bool.isRequired
}

export default CardsStack;