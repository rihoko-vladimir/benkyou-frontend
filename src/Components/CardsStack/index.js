import useStyle from "./style";
import PropTypes from "prop-types";
import Card from "../Card";
import {useState} from "react";
import {Typography} from "@mui/material";

const CardsStack = (props) => {
    const info = props.cards;
    const classes = useStyle();
    const cardsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCards, setCurrentCards] = useState(info.slice(0, 8 > info.length ? info.length : 8));
    const pages = Math.round(info.length / cardsPerPage) + (((info.length % cardsPerPage) > 0) ? 1 : 0);
    const isPaginateAble = pages > 1;
    const onNavigationClicked = (event, value) => {
        const end = value * cardsPerPage > info.length ? info.length : value * cardsPerPage;
        const start = end - ((end % cardsPerPage > 0) ? end % cardsPerPage : cardsPerPage);
        setCurrentCards(info.slice(start, end));
        setCurrentPage(value);
    }
    return (
        info.length !== 0
            ? <div className={classes.mainContainer}>
                <div className={classes.cardsContainer}>
                    {(isPaginateAble ? currentCards : info).map(card =>
                        <Card card={card} key={card.id}/>
                    )}
                </div>
                {/*{isPaginateAble*/}
                {/*    ? <Pagination count={pages}*/}
                {/*                  size={"large"}*/}
                {/*                  color={"primary"}*/}
                {/*                  page={currentPage}*/}
                {/*                  onChange={onNavigationClicked}/>*/}
                {/*    : null}*/}
            </div>
            : <Typography variant={"h6"}>It's kinda empty here...</Typography>
    )
}

CardsStack.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default CardsStack;