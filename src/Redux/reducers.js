import * as type from "./types";
import {combineReducers} from "redux";
import Card from "../Models/card";
import Kanji from "../Models/kanji";

const dummyAccountState = {
    accountId: 0,
    firstName: "test",
    lastName: "test",
    birthday: "2021-12-13",
    aboutAccount: "test",
    accountImageUrl: "https://lh3.googleusercontent.com/a-/AOh14GineJdMiu0253KCDxizNsvnYdwMFjTDXL3fjgC1vQ=s288-p-rw-no",
    isLoggedIn: false,
    login: "rihoko",
    email: "vovakozlouskiy@gmail.com",
}

export const isLoading = false;

export const dialogModes = {
    edit: "EDIT",
    create: "CREATE",
}

const dialogDummyState = {
    isOpened: false,
    mode: dialogModes.create
}

const defaultRegistrationState = {
    firstName:"",
    lastName:"",
    userName: "",
    email:"",
    password: "",
    passwordConfirmation:"",
    step:0
}

const usernameRequestDefault = {status : undefined, message: undefined};

const registerRequestDefault = {success: undefined, message: undefined}

const emailRequestDefault = {status : undefined, message: undefined};

const emailCodeRequestDefault = {status : undefined, message: undefined}

const resultDefault = {success : false, message: undefined, value : undefined}

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
        case type.CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload}
        case type.CHANGE_LAST_NAME:
            return {...state, lastName: action.payload}
        case type.CHANGE_BIRTH_DATE:
            return {...state, birthday: action.payload}
        case type.CHANGE_ABOUT_INFO:
            return {...state, aboutAccount: action.payload}
        case type.CHANGE_PICTURE:
            return {...state, accountImageUrl: action.payload}
        case type.LOG_IN_SUCCESS:
            return {
                accountId: action.payload.id,
                login: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthday: action.payload.birthday,
                aboutAccount: action.payload.about,
                accountImageUrl: action.payload.avatarUrl,
                email: action.payload.email,
                isLoggedIn: true
            }
        case type.LOG_OUT:
            return {
                accountId: undefined,
                login: undefined,
                firstName: undefined,
                lastName: undefined,
                birthday: undefined,
                aboutAccount: undefined,
                accountImageUrl: undefined,
                email: undefined,
                isLoggedIn: false
            }
        case type.LOGIN_TEST:
            return {
                ...state, isLoggedIn: true,
            }
        case type.LOGOUT_TEST:
            return {
                ...state, isLoggedIn: false,
            }
    }
    return state;
}

const myCardsReducer = (state = dummyCardsState, action) => {
    switch (action.type) {
        case type.ADD_NEW_CARD:
            return [...state, action.payload]
        case type.REMOVE_CARD:
            return [...state.filter((card) => card.id !== action.payload)]
        case type.SAVE_CARD: {
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
        case type.SET_RANDOM_LIST:
            return [...action.payload]
        case type.FINISH_MATCH_LEARNING:
            return []
    }
    return state;
}

const readingsReducer = (state = [], action) => {
    switch (action.type) {
        case type.SET_CURRENT_ALL_READINGS:
            return [...action.payload]
        case type.FINISH_MATCH_LEARNING:
            return [];
    }
    return state;
}

const resultsReducer = (state = [], action) => {
    switch (action.type) {
        case type.ADD_MATCH_RESULT:
            return [...state, action.payload]
        case type.FINISH_MATCH_LEARNING:
            return []
    }
    return state;
}

const learnReducer = (state = dummyLearnState, action) => {
    switch (action.type) {
        case type.SET_CURRENT_KANJI_INDEX:
            return {...state, currentKanjiIndex: action.payload}
        case type.START_MATCH:
            return {...state, isMatching: true}
        case type.FINISH_MATCH_LEARNING:
            return dummyLearnState
    }
    return state;
}

const selectedKanjiReducer = (state = [], action) => {
    switch (action.type) {
        case type.SELECT_CURRENT_KANJI_LIST:
            return action.payload
    }
    return state;
}

const dialogReducer = (state = dialogDummyState, action) => {
    switch (action.type) {
        case type.OPEN_EDIT_DIALOG:
            return {isOpened: true, mode: dialogModes.edit};
        case type.OPEN_CREATE_NEW_SET_DIALOG:
            return {isOpened: true, mode: dialogModes.create}
        case type.CLOSE_DIALOG:
            return {...state, isOpened: false};
        case type.SAVE_CARD:
            return {...state, isOpened: false};
    }
    return state;
}
const editedValuesReducer = (state = editCardDummyState, action) => {
    switch (action.type) {
        case type.OPEN_EDIT_DIALOG:
            return {...action.payload}
        case type.OPEN_CREATE_NEW_SET_DIALOG:
            return {...action.payload}
        case type.SET_NEW_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].kanji = action.payload.newKanji;
            return {...state, kanjiList}
        }
        case type.SET_NEW_KUNYOUMI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].kunyoumi = action.payload.newReadingsArray
            return {...state, kanjiList}
        }
        case type.SET_NEW_ONYOUMI: {
            const kanjiList = [...state.kanjiList];
            kanjiList[action.payload.index].onyoumi = action.payload.newReadingsArray
            return {...state, kanjiList}
        }
        case type.SET_NEW_CARD_NAME:
            return {...state, name: action.payload}

        case type.SET_NEW_CARD_DESCRIPTION:
            return {...state, description: action.payload}

        case type.REMOVE_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList.splice(action.payload, 1);
            return {...state, kanjiList}
        }
        case type.ADD_KANJI: {
            const kanjiList = [...state.kanjiList];
            kanjiList.push(new Kanji("", [], []))
            return {...state, kanjiList};
        }
    }
    return state;
}

const snackbarReducer = (state = snackbarDummyState, action) => {
    switch (action.type) {
        case type.SHOW_SNACKBAR:
            return {isShown: true, message: action.payload}
        case type.HIDE_SNACKBAR:
            return {isShown: false, message: ""}
    }
    return state;
}

const isLoadingReducer = (state = isLoading, action) =>{
    switch (action.type){
        case type.START_LOADING:
            return true;
        case type.FINISH_LOADING:
            return false;
    }
    return state;
}

const registerReducer = (state = registerRequestDefault, action) =>{
    switch (action.type){
        case type.REGISTER_SUCCESS:
            return {success: true, payload: action.payload}
        case type.REGISTER_FAILURE:
            return {success: false, payload: action.payload}
        case type.FINISH_REGISTRATION:
            return registerRequestDefault
    }
    return state;
}

const isUserNameSuccessReducer = (state = usernameRequestDefault, action) =>{
    switch (action.type){
        case type.CHECK_USERNAME_SUCCESS:
            return {status : true, message: undefined};
        case type.CHECK_USERNAME_FAILURE:
            return {status : false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return usernameRequestDefault
        case type.RETURN_TO_USERNAME:
            return usernameRequestDefault;
    }
    return state;
}

const isEmailSuccessReducer = (state = emailRequestDefault, action) =>{
    switch (action.type){
        case type.CHECK_EMAIL_SUCCESS:
            return {status : true, message: undefined};
        case type.CHECK_EMAIL_FAILURE:
            return {status : false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return emailRequestDefault;
    }
    return state;
}

const isEmailCodeSuccessReducer = (state = emailCodeRequestDefault, action) =>{
    switch (action.type){
        case type.SEND_EMAIL_CODE_SUCCESS:
            return {status : true, message: undefined};
        case type.SEND_EMAIL_CODE_FAILURE:
            return {status : false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return emailCodeRequestDefault;
        case type.RETURN_TO_USERNAME:
            return emailCodeRequestDefault;
    }
    return state;
}

const resultReducer = (state = resultDefault ,action)=>{
    switch (action.type){
        case type.SEND_EMAIL_CODE_SUCCESS:
            return {success : true, message: undefined, value: action.payload};
        case type.SEND_EMAIL_CODE_FAILURE:
            return {success : false, message: action.payload, value: undefined};
        case type.FINISH_REGISTRATION:
            return resultDefault
    }
    return state;
}

const registrationReducer = (state = defaultRegistrationState, action) =>{
    switch (action.type){
        case type.REGISTRATION_CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload}
        case type.REGISTRATION_CHANGE_LAST_NAME:
            return {...state, lastName: action.payload}
        case type.REGISTRATION_CHANGE_USERNAME:
            return {...state, userName: action.payload}
        case type.REGISTRATION_CHANGE_EMAIL:
            return {...state, email: action.payload}
        case type.REGISTRATION_CHANGE_PASSWORD:
            return {...state, password: action.payload}
        case type.REGISTRATION_CHANGE_PASSWORD_CONFIRMATION:
            return {...state, passwordConfirmation: action.payload}
        case type.SET_REGISTRATION_STEP:
            return {...state, step: action.payload}
        case type.RETURN_TO_USERNAME:
            return {...state, password: "", passwordConfirmation: ""};
        case type.FINISH_REGISTRATION:
            return defaultRegistrationState
    }
    return state;
}

const loginRequestReducer = (state = null, action) =>{
    switch (action.type){
        case type.LOG_IN_SUCCESS:
            return true
        case type.LOG_IN_FAILURE:
            return false
        case type.FINISH_LOGIN:
            return null;
    }
    return null;
}

const emailConfirmationResultReducer = (state = false, action) =>{
    switch (action.type){
        case type.EMAIL_CONFIRMATION_REQUIRED:
            return true;
        case type.FINISH_REGISTRATION:
            return false;
    }
    return false;
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
    snackbar: snackbarReducer,
    isLoading : isLoadingReducer,
    register: registerReducer,
    isUserNameSuccess : isUserNameSuccessReducer,
    isEmailSuccess: isEmailSuccessReducer,
    isEmailCodeSuccess : isEmailCodeSuccessReducer,
    result: resultReducer,
    registration: registrationReducer,
    emailConfirmation: emailConfirmationResultReducer,
    login: loginRequestReducer
});