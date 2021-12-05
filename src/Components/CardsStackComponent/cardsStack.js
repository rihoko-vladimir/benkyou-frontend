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
    const pages = Math.round(info.length / cardsPerPage) + (((info.length % cardsPerPage) > 0) ? 1 : 0);
    console.log(pages)
    const onNavigationClicked = (event, value) => {
        console.log("value"+value)
        const end = value * cardsPerPage > info.length ? info.length : value * cardsPerPage;
        const start = end - ((end % cardsPerPage > 0) ? end % cardsPerPage : cardsPerPage);
        console.log("end" + end)
        console.log("start" + start)
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
            {info.length > 8 ? <Pagination count={pages} size={"large"} color={"primary"} page={currentPage}
                                           onChange={onNavigationClicked}/> : null}
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