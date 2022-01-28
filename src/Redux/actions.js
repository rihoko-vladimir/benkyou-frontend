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
    REGISTER,
    REMOVE_CARD
} from "./types";

export const changeFirstName = (newName) => ({
    type: CHANGE_FIRST_NAME,
    payload: newName,
});

export const changeLastName = (newLastName) => ({
    type: CHANGE_LAST_NAME,
    payload: newLastName,
});

export const changeBirthDate = (newBirthDate) => ({
    type: CHANGE_BIRTH_DATE,
    payload: newBirthDate,
});

export const changeAboutInfo = (newAboutInfo) => ({
    type: CHANGE_ABOUT_INFO,
    payload: newAboutInfo,
});

export const changePicture = (newPictureUrl) => ({
    type: CHANGE_PICTURE,
    payload: newPictureUrl,
});

export const loginTest = () => ({
    type: LOGIN_TEST,
})

export const logoutTest = () => ({
    type: LOGOUT_TEST,
})

export const addNewCard = (newCard) => ({
    type: ADD_NEW_CARD,
    payload: newCard,
});

export const removeCard = (idToRemove) => ({
    type: REMOVE_CARD,
    payload: idToRemove,
});

export const modifyCard = (modifiedCard) => ({
    type: MODIFY_CARD,
    payload: modifiedCard,
});

export const login = (accountCredentials) => ({
    type: LOG_IN,
    payload: accountCredentials
});

export const register = (registrationCredentials) => ({
    type: REGISTER,
    payload: registrationCredentials
})

export const logout = () => ({
    type: LOG_OUT,
});