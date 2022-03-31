import * as type from "./types";
import {combineReducers} from "redux";
import Card from "../Models/card";
import Kanji from "../Models/kanji";

const dummyAccountState = {
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
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    step: 0
}

const usernameRequestDefault = {status: undefined, message: undefined};

const registerRequestDefault = {success: undefined, message: undefined}

const emailRequestDefault = {status: undefined, message: undefined};

const emailCodeRequestDefault = {status: undefined, message: undefined}

const resultDefault = {success: false, message: undefined}

const tokensDefaultState = {access: undefined, refresh: undefined};

const errorSnackBarDummyState = {isShown: false, message: undefined};

const defaultReset = {status: undefined, message: undefined}

const defaultAccountPageState = {
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    nickName: "",
    password: "",
    about: "",
    accountImage: "",
    tabValue: "1",
    base64: ""
};

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

const editCardDummyState = {
    name: "",
    description: "",
    kanjiList: []
}

const snackbarDummyState = {
    isShown: false,
    message: "",
};

const accountReducer = (state = dummyAccountState, action) => {
    switch (action.type) {
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
        case type.CHANGE_USER_ACCOUNT_SUCCESS:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthday: action.payload.birthday,
                aboutAccount: action.payload.about,
                accountImageUrl: action.payload.avatarUrl,
                login: action.payload.userName
            }
        case type.LOG_OUT:
            return dummyAccountState
        case type.GET_NEW_TOKENS_FAILURE:
            return dummyAccountState
        default:
            return state;
    }
}

const myCardsReducer = (state = dummyCardsState, action) => {
    switch (action.type) {
        case type.CREATE_SET_SUCCESS:
            return [...state, action.payload]
        case type.REMOVE_SET_SUCCESS:
            return [...state.filter((card) => card.id !== action.payload)]
        case type.EDIT_SET_SUCCESS: {
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
        case type.GET_USER_SETS_SUCCESS:
            return action.payload
        case type.GET_NEW_TOKENS_FAILURE:
            return []
        case type.LOG_OUT:
            return []
        default:
            return state;
    }
}

export const allSetsReducer = (state = dummyCardsState, action) => {
    switch (action.type){
        case type.GET_ALL_SETS_SUCCESS:

    }
}

const randomListReducer = (state = [], action) => {
    switch (action.type) {
        case type.SET_RANDOM_LIST:
            return [...action.payload]
        case type.FINISH_MATCH_LEARNING:
            return []
        default:
            return state;
    }
}

const readingsReducer = (state = [], action) => {
    switch (action.type) {
        case type.SET_CURRENT_ALL_READINGS:
            return [...action.payload]
        case type.FINISH_MATCH_LEARNING:
            return [];
        default:
            return state;
    }
}

const resultsReducer = (state = [], action) => {
    switch (action.type) {
        case type.ADD_MATCH_RESULT:
            return [...state, action.payload]
        case type.FINISH_MATCH_LEARNING:
            return []
        default:
            return state;
    }
}

const learnReducer = (state = dummyLearnState, action) => {
    switch (action.type) {
        case type.SET_CURRENT_KANJI_INDEX:
            return {...state, currentKanjiIndex: action.payload}
        case type.START_MATCH:
            return {...state, isMatching: true}
        case type.FINISH_MATCH_LEARNING:
            return dummyLearnState
        default:
            return state;
    }
}

const selectedKanjiReducer = (state = [], action) => {
    switch (action.type) {
        case type.SELECT_CURRENT_KANJI_LIST:
            return action.payload
        default:
            return state;
    }
}

const dialogReducer = (state = dialogDummyState, action) => {
    switch (action.type) {
        case type.OPEN_EDIT_DIALOG:
            return {isOpened: true, mode: dialogModes.edit};
        case type.OPEN_CREATE_NEW_SET_DIALOG:
            return {isOpened: true, mode: dialogModes.create}
        case type.CLOSE_DIALOG:
            return {...state, isOpened: false};
        case type.SAVE_SET:
            return {...state, isOpened: false};
        case type.CREATE_SET_SUCCESS:
            return {...state, isOpened: false};
        case type.EDIT_SET_SUCCESS:
            return {...state, isOpened: false};
        default:
            return state;
    }
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
        case type.SET_NEW_SET_NAME:
            return {...state, name: action.payload}

        case type.SET_NEW_SET_DESCRIPTION:
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
        case type.LOG_OUT:
            return editCardDummyState
        default:
            return state;
    }
}

const snackbarReducer = (state = snackbarDummyState, action) => {
    switch (action.type) {
        case type.SHOW_SNACKBAR:
            return {isShown: true, message: action.payload}
        case type.HIDE_SNACKBAR:
            return {...state, isShown: false}
        case type.REMOVE_SET_SUCCESS:
            return {isShown: true, message: "Set removed"}
        case type.CREATE_SET_SUCCESS:
            return {isShown: true, message: "Set created"}
        case type.EDIT_SET_SUCCESS:
            return {isShown: true, message: "Set edited"}
        case type.CHANGE_USER_ACCOUNT_SUCCESS: {
            console.log(action.payload)
            return {isShown: true, message: "Account updated"}
        }
        default:
            return state;
    }
}

const errorSnackBarReducer = (state = errorSnackBarDummyState, action) => {
    switch (action.type) {
        case type.LOG_IN_FAILURE:
            return {isShown: true, message: action.payload}
        case type.CREATE_SET_FAILURE:
            return {isShown: true, message: action.payload}
        case type.EDIT_SET_FAILURE:
            return {isShown: true, message: action.payload}
        case type.REMOVE_SET_FAILURE:
            return {isShown: true, message: action.payload}
        case type.REGISTER_FAILURE:
            return {isShown: true, message: action.payload}
        case type.RESET_PASSWORD_SEND_FAILURE:
            return {isShown: true, message: action.payload}
        case type.RESET_PASSWORD_SET_FAILURE:
            return {isShown: true, message: action.payload}
        case type.CHANGE_USER_ACCOUNT_FAILURE:
            return {isShown: true, message: action.payload}
        case type.GET_ALL_SETS_FAILURE:
            return {isShown: true, message: action.payload}
        case type.HIDE_SNACKBAR:
            return {...state, isShown: false}
        default:
            return state;
    }
}

const isLoadingReducer = (state = isLoading, action) => {
    switch (action.type) {
        case type.START_LOADING:
            return true;
        case type.FINISH_LOADING:
            return false;
        default:
            return state;
    }
}

const registerReducer = (state = registerRequestDefault, action) => {
    switch (action.type) {
        case type.REGISTER_SUCCESS:
            return {success: true, payload: action.payload}
        case type.REGISTER_FAILURE:
            return {success: false, payload: action.payload}
        case type.FINISH_REGISTRATION:
            return registerRequestDefault
        default:
            return state;
    }
}

const isUserNameSuccessReducer = (state = usernameRequestDefault, action) => {
    switch (action.type) {
        case type.CHECK_USERNAME_SUCCESS:
            return {status: true, message: undefined};
        case type.CHECK_USERNAME_FAILURE:
            return {status: false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return usernameRequestDefault
        case type.RETURN_TO_USERNAME:
            return usernameRequestDefault;
        default:
            return state;
    }
}

const isEmailSuccessReducer = (state = emailRequestDefault, action) => {
    switch (action.type) {
        case type.CHECK_EMAIL_SUCCESS:
            return {status: true, message: undefined};
        case type.CHECK_EMAIL_FAILURE:
            return {status: false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return emailRequestDefault;
        default:
            return state;
    }
}

const isEmailCodeSuccessReducer = (state = emailCodeRequestDefault, action) => {
    switch (action.type) {
        case type.SEND_EMAIL_CODE_SUCCESS:
            return {status: true, message: undefined};
        case type.SEND_EMAIL_CODE_FAILURE:
            return {status: false, message: action.payload};
        case type.FINISH_REGISTRATION:
            return emailCodeRequestDefault;
        case type.RETURN_TO_USERNAME:
            return emailCodeRequestDefault;
        default:
            return state;
    }
}

const resultReducer = (state = resultDefault, action) => {
    switch (action.type) {
        case type.SEND_EMAIL_CODE_SUCCESS:
            return {success: true, message: undefined, value: action.payload};
        case type.SEND_EMAIL_CODE_FAILURE:
            return {success: false, message: action.payload, value: undefined};
        case type.FINISH_REGISTRATION:
            return resultDefault
        default:
            return state;
    }
}

const resetPasswordResultReducer = (state = defaultReset, action) => {
    switch (action.type) {
        case type.RESET_PASSWORD_SEND_SUCCESS:
            return {status: true, message: ""}
        case type.RESET_PASSWORD_SEND_FAILURE:
            return {status: false, message: action.payload}
        case type.FINISH_REGISTRATION:
            return defaultReset
        default:
            return state;
    }
}

const registrationReducer = (state = defaultRegistrationState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

const loginRequestReducer = (state = null, action) => {
    switch (action.type) {
        case type.LOG_IN_SUCCESS:
            return true
        case type.LOG_IN_FAILURE:
            return false
        case type.FINISH_LOGIN:
            return null;
        default:
            return null;
    }
}

const emailConfirmationResultReducer = (state = false, action) => {
    switch (action.type) {
        case type.EMAIL_CONFIRMATION_REQUIRED:
            return true;
        case type.FINISH_REGISTRATION:
            return false;
        default:
            return null;
    }
}

const resetPasswordSetReducer = (state = resultDefault, action) => {
    switch (action.type) {
        case type.RESET_PASSWORD_SET_SUCCESS:
            return {success: true, message: undefined}
        case type.RESET_PASSWORD_SET_FAILURE:
            return {success: false, message: undefined}
        case type.FINISH_REGISTRATION:
            return resultDefault
        default:
            return state;
    }
}

const tokensReducer = (state = tokensDefaultState, action) => {
    switch (action.type) {
        case type.TOKEN_SUCCESS:
            return {access: action.payload.accessToken, refresh: action.payload.refreshToken}
        case type.TOKEN_FAILURE:
            return tokensDefaultState;
        case type.GET_NEW_TOKENS_SUCCESS:
            return {access: action.payload.access, refresh: action.payload.refresh}
        case type.GET_NEW_TOKENS_FAILURE:
            return tokensDefaultState;
        case type.LOG_OUT:
            return tokensDefaultState;
        default:
            return state;
    }
}

const accountInfoResultReducer = (state = defaultReset, action) => {
    switch (action.type) {
        case type.CHANGE_USER_ACCOUNT_SUCCESS:
            return {status: true}
        case type.CHANGE_USER_ACCOUNT_FAILURE:
            return {status: false, message: action.payload}
        default:
            return state;
    }
}

const accountPageStateReducer = (state = defaultAccountPageState, action) => {
    switch (action.type) {
        case type.LOG_IN_SUCCESS:
            return {
                nickName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthday: action.payload.birthday,
                about: action.payload.about,
                email: action.payload.email,
                accountImage: action.payload.avatarUrl
            }
        case type.CHANGE_USER_ACCOUNT_SUCCESS:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthday: action.payload.birthday,
                about: action.payload.about,
                accountImage: action.payload.avatarUrl,
                nickName: action.payload.userName,
                email: action.payload.email,
                base64: "",
                tabValue: "1",
                password: ""
            }
        case type.LOG_OUT:
            return defaultAccountPageState
        case type.GET_NEW_TOKENS_FAILURE:
            return defaultAccountPageState
        case type.CHANGE_USER_ACCOUNT_FIRST_NAME:
            return {...state, firstName: action.payload}
        case type.CHANGE_USER_ACCOUNT_LAST_NAME:
            return {...state, lastName: action.payload}
        case type.CHANGE_USER_ACCOUNT_USER_NAME:
            return {...state, nickName: action.payload}
        case type.CHANGE_USER_ACCOUNT_EMAIL:
            return {...state, email: action.payload}
        case type.CHANGE_USER_ACCOUNT_PASSWORD:
            return {...state, password: action.payload}
        case type.CHANGE_USER_ACCOUNT_ABOUT:
            return {...state, about: action.payload}
        case type.CHANGE_USER_ACCOUNT_BIRTHDAY:
            return {...state, birthday: action.payload}
        case type.CHANGE_USER_ACCOUNT_VALUE:
            return {...state, tabValue: action.payload, accountImage: "", base64: ""}
        case type.CHANGE_USER_ACCOUNT_IMAGE:
            return {...state, accountImage: action.payload}
        case type.CHANGE_USER_ACCOUNT_BASE64:
            return {...state, base64: action.payload}
        default:
            return state;
    }
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
    isLoading: isLoadingReducer,
    register: registerReducer,
    isUserNameSuccess: isUserNameSuccessReducer,
    isEmailSuccess: isEmailSuccessReducer,
    isEmailCodeSuccess: isEmailCodeSuccessReducer,
    result: resultReducer,
    registration: registrationReducer,
    emailConfirmation: emailConfirmationResultReducer,
    login: loginRequestReducer,
    applicationTokens: tokensReducer,
    errorSnackbar: errorSnackBarReducer,
    resetSend: resetPasswordResultReducer,
    resetSetPassword: resetPasswordSetReducer,
    changeAccountInfoResult: accountInfoResultReducer,
    accountPage: accountPageStateReducer
});