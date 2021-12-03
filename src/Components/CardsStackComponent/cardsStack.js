import useStyle from "./style";
import PropTypes from "prop-types";
import Card from "../CardComponent/card";
import {useState} from "react";
import {Pagination} from "@mui/material";

const CardsStack = (props) => {
    const info = props.info;
    const classes = useStyle();
    const cardsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCards, setCurrentCards] = useState(info.slice(0, 8 > info.length ? info.length : 8));
    const pages = info.length / cardsPerPage;
    const onNavigationClicked = (event, value) => {
        console.log(value)
        const end = value * cardsPerPage > info.length ? info.length : value * cardsPerPage;
        const start = end - cardsPerPage;
        setCurrentCards(info.slice(start, end));
        setCurrentPage(value);
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.cardsContainer}>
                {currentCards.map(element =>
                    <Card cardName={element.title} cardDescription={element.description} kanji={element.kanji}/>
                )}
            </div>
            <Pagination count={pages} size={"large"} color={"primary"} page={currentPage}
                        onChange={onNavigationClicked}/>
        </div>
    )
}

CardsStack.propTypes = {
    info: PropTypes.arrayOf(PropTypes.objectOf({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        kanji: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default CardsStack;