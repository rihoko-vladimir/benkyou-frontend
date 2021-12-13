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