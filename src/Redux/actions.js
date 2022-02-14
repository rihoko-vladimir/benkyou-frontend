import * as types from "./types";

export const changeFirstName = (newName) => ({
    type: types.CHANGE_FIRST_NAME,
    payload: newName,
});

export const changeLastName = (newLastName) => ({
    type: types.CHANGE_LAST_NAME,
    payload: newLastName,
});

export const changeBirthDate = (newBirthDate) => ({
    type: types.CHANGE_BIRTH_DATE,
    payload: newBirthDate,
});

export const changeAboutInfo = (newAboutInfo) => ({
    type: types.CHANGE_ABOUT_INFO,
    payload: newAboutInfo,
});

export const changePicture = (newPictureUrl) => ({
    type: types.CHANGE_PICTURE,
    payload: newPictureUrl,
});

export const loginTest = () => ({
    type: types.LOGIN_TEST,
})

export const logoutTest = () => ({
    type: types.LOGOUT_TEST,
})

export const addNewCard = (newCard) => ({
    type: types.ADD_NEW_CARD,
    payload: newCard,
});

export const removeCard = (idToRemove) => ({
    type: types.REMOVE_CARD,
    payload: idToRemove,
});

export const modifyCard = (modifiedCard) => ({
    type: types.EDIT_CARD,
    payload: modifiedCard,
});

export const login = (accountCredentials) => ({
    type: types.LOG_IN,
    payload: accountCredentials
});

export const register = (registrationCredentials) => ({
    type: types.REGISTER,
    payload: registrationCredentials
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
    type: types.SET_NEW_CARD_NAME,
    payload: newCardName
})

export const setNewCardDescription = (newCardDescription) => ({
    type: types.SET_NEW_CARD_DESCRIPTION,
    payload: newCardDescription,
})

export const saveCard = (newCard) => ({
    type: types.SAVE_CARD,
    payload: newCard
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