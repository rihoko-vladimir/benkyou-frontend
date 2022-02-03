import {
    ADD_MATCH_RESULT,
    ADD_NEW_CARD,
    CHANGE_ABOUT_INFO,
    CHANGE_BIRTH_DATE,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PICTURE,
    CLOSE_EDIT_DIALOG,
    EDIT_CARD,
    FINISH_MATCH_LEARNING,
    LOG_IN,
    LOG_OUT,
    LOGIN_TEST,
    LOGOUT_TEST,
    OPEN_EDIT_DIALOG,
    REMOVE_CARD,
    SELECT_CARD,
    SELECT_CURRENT_KANJI_LIST,
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

const dummyCardsState = [];


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
            return [...state.myCards, action.payload]
        case REMOVE_CARD:
            return [...state.myCards.filter((card) => card.id !== action.payload)]
        case EDIT_CARD: {
            const getIndexById = (id, array) => {
                for (const index in array) {
                    if (array[index].id === id) return index;
                }
            }
            const editedCard = action.payload;
            const editedIndex = getIndexById(editedCard.id, state)
            const stateCopy = [...state];
            stateCopy[editedIndex] = editedCard;
            return stateCopy;
        }
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

const selectedKanjiReducer = (state = [], action) => {
    switch (action.type) {
        case SELECT_CURRENT_KANJI_LIST:
            return action.payload
    }
    return state;
}

const editDialogReducer = (state = false, action) => {
    switch (action.type) {
        case OPEN_EDIT_DIALOG:
            return true;
        case CLOSE_EDIT_DIALOG:
            return false;
    }
    return state;
}

const selectedCardReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return action.payload
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
    selectedKanji: selectedKanjiReducer,
    isEditDialogOpened: editDialogReducer,
    selectedCard: selectedCardReducer
});