import {
    ADD_NEW_CARD,
    CHANGE_ABOUT_INFO,
    CHANGE_BIRTH_DATE,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PICTURE,
    LOG_IN,
    LOG_OUT,
    LOGIN_TEST,
    LOGOUT_TEST,
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
            return {...state, birthday: action.payload}
        case CHANGE_ABOUT_INFO:
            return {...state, aboutAccount: action.payload}
        case CHANGE_PICTURE:
            return {...state, accountImageUrl: action.payload}
        case LOG_IN:
            return {
                //TODO add api calls
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthday: action.payload.birthday,
                aboutAccount: action.payload.aboutAccount,
                accountImageUrl: action.payload.accountImageUrl,
                isLoggedIn: true
            }
        case LOG_OUT:
            //TODO add api calls
            return {
                ...state,
                firstName: undefined,
                lastName: undefined,
                birthday: undefined,
                aboutAccount: undefined,
                accountImageUrl: undefined,
                isLoggedIn: false
            }
        case LOGIN_TEST:
            return {
                ...state, isLoggedIn: true,
            }
        case LOGOUT_TEST:
            return {
                ...state, isLoggedIn: false,
            }
    }
    console.log("state", state)
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
    console.log(state)
    return state;
}

const kanjiReadingsMatchReducer = ()=>{

}

export default combineReducers({
    account: accountReducer,
    myCards: myCardsReducer,
});