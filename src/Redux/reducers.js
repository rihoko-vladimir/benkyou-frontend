import {
    ADD_NEW_CARD,
    CHANGE_ABOUT_INFO,
    CHANGE_BIRTH_DATE,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PICTURE,
    MODIFY_CARD,
    REMOVE_CARD
} from "./types";
import {combineReducers} from "redux";

const dummyAccountState = {
    firstName: "Vladimir",
    lastName: "Kozlovsky",
    //YYYY-MM-DD
    birthday: "2021-12-13",
    aboutAccount: "lorem ipsum i guess",
    accountImageUrl: "https://lh3.googleusercontent.com/a-/AOh14GineJdMiu0253KCDxizNsvnYdwMFjTDXL3fjgC1vQ=s288-p-rw-no",
    isLoggedIn: false,
}
const dummyCardsState = {myCards: []};

const accountReducer = (state = dummyAccountState, action) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload}
        case CHANGE_LAST_NAME:
            return {...state, lastName: action.payload}
        case CHANGE_BIRTH_DATE:
            return {...state, birthDate: action.payload}
        case CHANGE_ABOUT_INFO:
            return {...state, aboutAccount: action.payload}
        case CHANGE_PICTURE:
            return {...state, accountImageUrl: action.payload}
    }
    return state;
}

const myCardsReducer = (state = dummyCardsState, action) => {
    switch (action.type) {
        case ADD_NEW_CARD:
            return {myCards: [...state.myCards, action.payload]}
        case REMOVE_CARD:
            return {myCards: [...state.myCards.filter((card) => card.id !== action.payload)]}
        case MODIFY_CARD:
            return {myCards: [...state.myCards, action.payload]}
    }
    return state;
}

export default combineReducers({
    account: accountReducer,
    myCards: myCardsReducer,
});