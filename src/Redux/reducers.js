import {
    ADD_MATCH_RESULT,
    ADD_NEW_CARD,
    CHANGE_ABOUT_INFO,
    CHANGE_BIRTH_DATE,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PICTURE,
    FINISH_MATCH_LEARNING,
    LOG_IN,
    LOG_OUT,
    LOGIN_TEST,
    LOGOUT_TEST,
    MODIFY_CARD,
    REMOVE_CARD,
    SET_CURRENT_ALL_READINGS,
    SET_CURRENT_KANJI_INDEX,
    SET_RANDOM_LIST,
    START_MATCH
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


const dummyLearnState = {
    currentKanjiIndex: 0,
    isMatching: false
}

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

const randomListReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RANDOM_LIST:
            console.log("random in reducer: ", action.payload)
            return [...action.payload]
        case FINISH_MATCH_LEARNING:
            return []
    }
    return state;
}

const readingsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CURRENT_ALL_READINGS:
            console.log("readings in reducer: ", action.payload)
            return [...action.payload]
        case FINISH_MATCH_LEARNING:
            return [];
    }
    return state;
}

const resultsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MATCH_RESULT:
            return [...state, action.payload]
        case FINISH_MATCH_LEARNING:
            return []
    }
    return state;
}

const learnReducer = (state = dummyLearnState, action) => {
    switch (action.type) {
        case SET_CURRENT_KANJI_INDEX:
            return {...state, currentKanjiIndex: action.payload}
        case START_MATCH:
            return {...state, isMatching: true}
        case FINISH_MATCH_LEARNING:
            return dummyLearnState
    }
    return state;
}

export default combineReducers({
    account: accountReducer,
    myCards: myCardsReducer,
    learn: learnReducer,
    randomList: randomListReducer,
    readings: readingsReducer,
    results: resultsReducer,
});