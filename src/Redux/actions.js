import * as types from "./types";
import {REGISTRATION_CHANGE_LAST_NAME, SET_REGISTRATION_STEP} from "./types";

export const checkUserName = (userName) => ({
    type: types.CHECK_USERNAME,
    payload: userName
})

export const checkUserNameSuccess = () => ({
    type: types.CHECK_USERNAME_SUCCESS
})

export const checkUserNameFailure = (errorMessage) => ({
    type: types.CHECK_USERNAME_FAILURE,
    payload: errorMessage
})

export const checkEmailSuccess = () => ({
    type: types.CHECK_EMAIL_SUCCESS
})

export const checkEmailFailure = (errorMessage) => ({
    type: types.CHECK_EMAIL_FAILURE,
    payload: errorMessage
})

export const checkEmail = (email) => ({
    type: types.CHECK_EMAIL,
    payload: email
})

export const sendEmailCode = ({emailCode, userId}) => ({
    type: types.SEND_EMAIL_CODE,
    payload: {emailCode, userId}
})

export const sendEmailCodeSuccess = () => ({
    type: types.SEND_EMAIL_CODE_SUCCESS,
})

export const sendEmailCodeFailure = (errorMessage) => ({
    type: types.SEND_EMAIL_CODE_FAILURE,
    payload: errorMessage
})

export const removeSet = (idToRemove) => ({
    type: types.REMOVE_SET,
    payload: idToRemove,
});

export const removeSetSuccess = (removedId) => ({
    type: types.REMOVE_SET_SUCCESS,
    payload: removedId
})

export const removeSetFailure = (errorMessage)=>({
    type: types.REMOVE_SET_FAILURE,
    payload: errorMessage
})

export const modifySet = (modifiedCard) => ({
    type: types.EDIT_SET,
    payload: modifiedCard,
});

export const modifySetSuccess = (modifiedSet) => ({
    type: types.EDIT_SET_SUCCESS,
    payload: modifiedSet
})

export const modifySetFailure = (errorMessage) => ({
    type: types.EDIT_SET_FAILURE,
    payload: errorMessage
})

export const login = (accountCredentials) => ({
    type: types.LOG_IN,
    payload: accountCredentials
});

export const loginSuccess = ({id, userName, firstName, lastName, birthday, about, avatarUrl, email}) => (
    {
        type: types.LOG_IN_SUCCESS,
        payload: {
            id,
            userName,
            firstName,
            lastName,
            birthday,
            about,
            avatarUrl,
            email,
        }
    })

export const startLoading = () => ({
    type: types.START_LOADING
})

export const finishLoading = () => ({
    type: types.FINISH_LOADING
})

export const tokenSuccess = (tokens) => ({
    type: types.TOKEN_SUCCESS,
    payload: tokens
})

export const loginFailure = (errorMessage) => ({
    type: types.LOG_IN_FAILURE,
    payload: errorMessage
})

export const register = (registrationCredentials) => ({
    type: types.REGISTER,
    payload: registrationCredentials
})

export const registerSuccess = (userId) => ({
    type: types.REGISTER_SUCCESS,
    payload: userId
})

export const registerFailure = (errorMessage) => ({
    type: types.REGISTER_FAILURE,
    payload: errorMessage
})

export const logout = () => ({
    type: types.LOG_OUT,
});

export const setRandomList = (kanjiList) => {
    const randomedList = kanjiList.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    return {
        type: types.SET_RANDOM_LIST, payload: randomedList,
    }
}

export const setCurrentKanjiIndex = (newIndex) => ({
    type: types.SET_CURRENT_KANJI_INDEX,
    payload: newIndex
})

export const setCurrentAllReadings = (kanjiArray, currentKanjiIndex) => {
    const sourceArray = [...kanjiArray];
    const correctReadings = [...sourceArray[currentKanjiIndex].kunyoumi, ...sourceArray[currentKanjiIndex].onyoumi];
    sourceArray.splice(currentKanjiIndex, 1);
    const arrayWithoutCurrentKanji = [...sourceArray];
    const firstIncorrectKanjiIndex = Math.round(Math.random() * (arrayWithoutCurrentKanji.length - 1));
    const firstIncorrectKanjiReadings = [
        ...arrayWithoutCurrentKanji[firstIncorrectKanjiIndex].kunyoumi,
        ...arrayWithoutCurrentKanji[firstIncorrectKanjiIndex].onyoumi];
    let secondIncorrectKanjiIndex;
    while (true) {
        secondIncorrectKanjiIndex = Math.round(Math.random() * (arrayWithoutCurrentKanji.length - 1));
        if (firstIncorrectKanjiIndex !== secondIncorrectKanjiIndex) break;
    }
    const secondIncorrectKanjiReadings = [
        ...arrayWithoutCurrentKanji[secondIncorrectKanjiIndex].kunyoumi,
        ...arrayWithoutCurrentKanji[secondIncorrectKanjiIndex].onyoumi];
    const allReadings = [...correctReadings, ...firstIncorrectKanjiReadings, ...secondIncorrectKanjiReadings].map(value => ({
        value,
        sort: Math.random()
    }))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
    return {
        type: types.SET_CURRENT_ALL_READINGS,
        payload: allReadings
    }
}

export const addCurrentKanjiMatchResult = (result) => ({
    type: types.ADD_MATCH_RESULT,
    payload: result
})


export const finishMatchLearning = () => ({
    type: types.FINISH_MATCH_LEARNING
})

export const startMatch = () => ({
    type: types.START_MATCH,
})

export const selectKanjiList = (kanjiList) => ({
    type: types.SELECT_CURRENT_KANJI_LIST,
    payload: [...kanjiList]
})

export const openEditDialog = (card) => ({
    type: types.OPEN_EDIT_DIALOG,
    payload: card
})

export const closeDialog = () => ({
    type: types.CLOSE_DIALOG,
})

export const openCreateDialog = (card) => ({
    type: types.OPEN_CREATE_NEW_SET_DIALOG,
    payload: card
})

export const setNewKanji = (newKanji, index) => ({
    type: types.SET_NEW_KANJI,
    payload: {index, newKanji}
})

export const setNewKunyoumi = (newReadingsArray, index) => ({
    type: types.SET_NEW_KUNYOUMI,
    payload: {index, newReadingsArray}
})

export const setNewOnyoumi = (newReadingsArray, index) => ({
    type: types.SET_NEW_ONYOUMI,
    payload: {index, newReadingsArray}
})

export const setNewCardName = (newCardName) => ({
    type: types.SET_NEW_SET_NAME,
    payload: newCardName
})

export const setNewCardDescription = (newCardDescription) => ({
    type: types.SET_NEW_SET_DESCRIPTION,
    payload: newCardDescription,
})

export const saveSet = (newCard) => ({
    type: types.SAVE_SET,
    payload: newCard
})

export const createSet = (set) => ({
    type: types.CREATE_SET,
    payload: set
})

export const createSetSuccess = (createdSet) => ({
    type: types.CREATE_SET_SUCCESS,
    payload: createdSet
})

export const createSetFailure = () => ({
    type: types.CREATE_SET_FAILURE
})

export const showSnackbar = (message) => ({
    type: types.SHOW_SNACKBAR,
    payload: message
})

export const hideSnackbar = () => ({
    type: types.HIDE_SNACKBAR
})

export const deleteKanji = (index) => ({
    type: types.REMOVE_KANJI,
    payload: index
})
export const addKanji = () => ({
    type: types.ADD_KANJI
})

export const changeRegistrationFirstName = (firstName) => ({
    type: types.REGISTRATION_CHANGE_FIRST_NAME,
    payload: firstName
})

export const changeRegistrationLastName = (lastName) => ({
    type: REGISTRATION_CHANGE_LAST_NAME,
    payload: lastName
})

export const changeRegistrationUserName = (userName) => ({
    type: types.REGISTRATION_CHANGE_USERNAME,
    payload: userName
})

export const changeRegistrationEmail = (email) => ({
    type: types.REGISTRATION_CHANGE_EMAIL,
    payload: email
})

export const changeRegistrationPassword = (password) => ({
    type: types.REGISTRATION_CHANGE_PASSWORD,
    payload: password
})

export const changeRegistrationPasswordConfirmation = (password) => ({
    type: types.REGISTRATION_CHANGE_PASSWORD_CONFIRMATION,
    payload: password
})

export const setRegistrationStep = (stepNumber) => ({
    type: SET_REGISTRATION_STEP,
    payload: stepNumber
})

export const finishRegistration = () => ({
    type: types.FINISH_REGISTRATION
})

export const returnToUsername = () => ({
    type: types.RETURN_TO_USERNAME
})

// export const emailConfirmationRequired = () => ({
//     type: types.EMAIL_CONFIRMATION_REQUIRED
// })

export const finishLogin = () => ({
    type: types.FINISH_LOGIN
})

export const getUserSets = () => ({
    type: types.GET_USER_SETS
})

export const setUserSetsSuccess = (userSetsResponse) => ({
    type: types.GET_USER_SETS_SUCCESS,
    payload: userSetsResponse
})

export const setUserSetsFailure = (errorMessage) => ({
    type: types.GET_USER_SETS_FAILURE,
    payload: errorMessage
})

export const getNewTokensSuccess = (tokens) => ({
    type: types.GET_NEW_TOKENS_SUCCESS,
    payload: {
        access: tokens.access,
        refresh: tokens.refresh
    }
})

export const getNewTokensFailure = () => ({
    type: types.GET_NEW_TOKENS_FAILURE
})

export const resetPasswordSend = (email) =>({
    type: types.RESET_PASSWORD_SEND,
    payload: email
})

export const resetPasswordSendSuccess = () =>({
    type: types.RESET_PASSWORD_SEND_SUCCESS
})

export const resetPasswordSendFailure = (errorMessage) =>({
    type: types.RESET_PASSWORD_SEND_FAILURE,
    payload: errorMessage
})

export const resetSetNewPassword = ({password, email, token}) => ({
    type: types.RESET_PASSWORD_SET,
    payload: {password, email, token}
})

export const resetSetNewPasswordSuccess = () =>({
    type : types.RESET_PASSWORD_SET_SUCCESS
})

export const resetSetNewPasswordFailure = (errorMessage) =>({
    type: types.RESET_PASSWORD_SET_FAILURE,
    payload: errorMessage
})

export const changeUserAccountInfo = ({firstName, lastName, birthday, about, avatar}) => ({
    type: types.CHANGE_USER_ACCOUNT,
    payload: {firstName, lastName, birthday, about, avatar}
})

export const changeUserAccountInfoSuccess = ({userName, firstName, lastName, birthday, about, avatarUrl}) => ({
    type: types.CHANGE_USER_ACCOUNT_SUCCESS,
    payload:{userName, firstName, lastName, birthday, about, avatarUrl}
})

export const changeUserAccountInfoFailure = (errorMessage) => ({
    type: types.CHANGE_USER_ACCOUNT_FAILURE,
    payload: errorMessage
})

export const changeFirstName = (firstName) =>({
    type:types.CHANGE_USER_ACCOUNT_FIRST_NAME,
    payload: firstName
})

export const changeLastName = (lastName) =>({
    type:types.CHANGE_USER_ACCOUNT_LAST_NAME,
    payload: lastName
})

export const changeUserName = (userName) =>({
    type:types.CHANGE_USER_ACCOUNT_USER_NAME,
    payload: userName
})

export const changeBirthday = (birthday) =>({
    type:types.CHANGE_USER_ACCOUNT_BIRTHDAY,
    payload: birthday
})

export const changeAbout = (about) =>({
    type:types.CHANGE_USER_ACCOUNT_ABOUT,
    payload: about
})

export const changeEmail = (email) =>({
    type:types.CHANGE_USER_ACCOUNT_EMAIL,
    payload: email
})

export const changePassword = (password) =>({
    type:types.CHANGE_USER_ACCOUNT_PASSWORD,
    payload: password
})

export const changeValue = (value) =>({
    type: types.CHANGE_USER_ACCOUNT_VALUE,
    payload: value
})

export const changeImage = (image) =>({
    type: types.CHANGE_USER_ACCOUNT_IMAGE,
    payload: image
})

export const changeBase64 = (base64) => ({
    type: types.CHANGE_USER_ACCOUNT_BASE64,
    payload: base64
})