import {
    ADD_KANJI,
    ADD_MATCH_RESULT,
    ADD_NEW_CARD,
    CHANGE_ABOUT_INFO,
    CHANGE_BIRTH_DATE,
    CHANGE_FIRST_NAME,
    CHANGE_LAST_NAME,
    CHANGE_PICTURE,
    CLOSE_DIALOG,
    FINISH_MATCH_LEARNING,
    HIDE_SNACKBAR,
    LOG_IN,
    LOG_OUT,
    LOGIN_TEST,
    LOGOUT_TEST,
    OPEN_CREATE_NEW_SET_DIALOG,
    OPEN_EDIT_DIALOG,
    REMOVE_CARD,
    REMOVE_KANJI,
    SAVE_CARD,
    SELECT_CURRENT_KANJI_LIST,
    SET_CURRENT_ALL_READINGS,
    SET_CURRENT_KANJI_INDEX,
    SET_NEW_CARD_DESCRIPTION,
    SET_NEW_CARD_NAME,
    SET_NEW_KANJI,
    SET_NEW_KUNYOUMI,
    SET_NEW_ONYOUMI,
    SET_RANDOM_LIST,
    SHOW_SNACKBAR,
    START_MATCH
} from "./types";
import {combineReducers} from "redux";
import Card from "../Models/card";
import Kanji from "../Models/kanji";

const dummyAccountState = {
    accountId: 1,
    firstName: "Vladimir",
    lastName: "Kozlovsky",
    //YYYY-MM-DD
    birthday: "2021-12-13",
    aboutAccount: "lorem ipsum i guess",
    accountImageUrl: "https://lh3.googleusercontent.com/a-/AOh14GineJdMiu0253KCDxizNsvnYdwMFjTDXL3fjgC1vQ=s288-p-rw-no",
    isLoggedIn: false,
}

export const dialogModes = {
    edit: "EDIT",
    create: "CREATE",
}

const dialogDummyState = {
    isOpened: false,
    mode: dialogModes.create
}

const dummyCardsState = [new Card(1, 1, "Default card", "This is my test description", "Me", [
    new Kanji("日1", ["ニチ1", "ジツ1", "ニ1"], ["ひ1", "は1"]),
    new Kanji("日2", ["ニチ2", "ジツ2", "ニ2"], ["ひ2", "は2"]),
    new Kanji("日3", ["ニチ3", "ジツ3", "ニ3"], ["ひ3", "は3"]),
    new Kanji("日4", ["ニチ4", "ジツ4", "ニ4"], ["ひ4", "は4"]),
    new Kanji("日5", ["ニチ5", "ジツ5", "ニ5"], ["ひ5", "は5"]),
    new Kanji("日6", ["ニチ6", "ジツ6", "ニ6"], ["ひ6", "は6"]),]),
    new Card(2, 1, "Default card", "This is my test description", "Me", [
        new Kanji("日1", ["ニチ1", "ジツ1", "ニ1"], ["ひ1", "は1"]),
        new Kanji("日2", ["ニチ2", "ジツ2", "ニ2"], ["ひ2", "は2"]),
        new Kanji("日3", ["ニチ3", "ジツ3", "ニ3"], ["ひ3", "は3"]),
        new Kanji("日4", ["ニチ4", "ジツ4", "ニ4"], ["ひ4", "は4"]),
        new Kanji("日5", ["ニチ5", "ジツ5", "ニ5"], ["ひ5", "は5"]),
        new Kanji("日6", ["ニチ6", "ジツ6", "ニ6"], ["ひ6", "は6"]),]),
    new Card(3, 1, "Default card", "This is my test description", "Me", [
        new Kanji("日1", ["ニチ1", "ジツ1", "ニ1"], ["ひ1", "は1"]),
        new Kanji("日2", ["ニチ2", "ジツ2", "ニ2"], ["ひ2", "は2"]),
        new Kanji("日3", ["ニチ3", "ジツ3", "ニ3"], ["ひ3", "は3"]),
        new Kanji("日4", ["ニチ4", "ジツ4", "ニ4"], ["ひ4", "は4"]),
        new Kanji("日5", ["ニチ5", "ジツ5", "ニ5"], ["ひ5", "は5"]),
        new Kanji("日6", ["ニチ6", "ジツ6", "ニ6"], ["ひ6", "は6"]),])];


const dummyLearnState = {
    currentKanjiIndex: 0,
    isMatching: false
}

const editCardDummyState = {}

const snackbarDummyState = {
    isShown: false,
    message: "",
};

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
            return [...state, action.payload]
        case REMOVE_CARD:
            return [...state.filter((card) => card.id !== action.payload)]
        case SAVE_CARD: {
            const newCard = action.payload;
            let newIndex = -1;
            for (const index in state) {
                if (state[index].id === newCard.id) newIndex = index;
            }
            const originalState = [...state];
            if (newIndex === -1) {
                originalState.push(newCard);
                return originalState;
            }
            originalState[newIndex] = newCard;
            return originalState;
        }
    }
    return state;
}

const randomListReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RANDOM_LIST:
            return [...action.payload]
        case FINISH_MATCH_LEARNING:
            return []
    }
    return state;
}

const readingsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CURRENT_ALL_READINGS:
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

const dialogReducer = (state = dialogDummyState, action) => {
    switch (action.type) {
        case OPEN_EDIT_DIALOG:
            return {isOpened: true, mode: dialogModes.edit};
        case OPEN_CREATE_NEW_SET_DIALOG:
            return {isOpened: true, mode: dialogModes.create}
        case CLOSE_DIALOG:
            return {...state, isOpened: false};
        case SAVE_CARD:
            return {...state, isOpened: false};
    }
    return state;
}
const editedValuesReducer = (state = editCardDummyState, action) => {
    switch (action.type) {
        case OPEN_EDIT_DIALOG:
            return {...action.payload}
        case OPEN_CREATE_NEW_SET_DIALOG:
            return {...action.payload}
        case SET_NEW_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].kanji = action.payload.newKanji;
            return {...state, kanjiList}
        }
        case SET_NEW_KUNYOUMI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].kunyoumi = action.payload.newReadingsArray
            return {...state, kanjiList}
        }
        case SET_NEW_ONYOUMI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].onyoumi = action.payload.newReadingsArray
            return {...state, kanjiList}
        }
        case SET_NEW_CARD_NAME:
            return {...state, name: action.payload}

        case SET_NEW_CARD_DESCRIPTION:
            return {...state, description: action.payload}

        case REMOVE_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList.splice(action.payload, 1);
            return {...state, kanjiList}
        }
        case ADD_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList.push(new Kanji("", [], []))
            return {...state, kanjiList};
        }
    }
    return state;
}

const snackbarReducer = (state = snackbarDummyState, action) => {
    switch (action.type) {
        case SHOW_SNACKBAR:
            return {isShown: true, message: action.payload}
        case HIDE_SNACKBAR:
            return {isShown: false, message: ""}
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
    dialog: dialogReducer,
    editCard: editedValuesReducer,
    snackbar: snackbarReducer
});