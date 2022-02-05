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
    REGISTER,
    REMOVE_CARD,
    SAVE_EDITED_CARD,
    SELECT_CURRENT_KANJI_LIST,
    SET_CURRENT_ALL_READINGS,
    SET_CURRENT_KANJI_INDEX,
    SET_NEW_CARD_DESCRIPTION,
    SET_NEW_CARD_NAME,
    SET_NEW_KANJI,
    SET_NEW_KUNYOUMI,
    SET_NEW_ONYOUMI,
    SET_RANDOM_LIST,
    START_MATCH
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
    type: EDIT_CARD,
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

export const setRandomList = (kanjiList) => {
    const randomedList = kanjiList.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    return {
        type: SET_RANDOM_LIST, payload: randomedList,
    }
}


export const setCurrentKanjiIndex = (newIndex) => ({
    type: SET_CURRENT_KANJI_INDEX,
    payload: newIndex
})

const arrayLog = (array, key) => {
    console.log(`Logging ${key}`);
    for (const arrayIndex in array) {
        console.log(array[arrayIndex]);
    }
}


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
        type: SET_CURRENT_ALL_READINGS,
        payload: allReadings
    }
}

export const addCurrentKanjiMatchResult = (result) => ({
    type: ADD_MATCH_RESULT,
    payload: result
})


export const finishMatchLearning = () => ({
    type: FINISH_MATCH_LEARNING
})

export const startMatch = () => ({
    type: START_MATCH,
})

export const selectKanjiList = (kanjiList) => ({
    type: SELECT_CURRENT_KANJI_LIST,
    payload: [...kanjiList]
})

export const openDialog = (card) => ({
    type: OPEN_EDIT_DIALOG,
    payload: card
})

export const closeDialog = () => ({
    type: CLOSE_EDIT_DIALOG,
})

export const setNewKanji = (newKanji, index) => ({
    type: SET_NEW_KANJI,
    payload: {index, newKanji}
})

export const setNewKunyoumi = (newReadingsArray, index) => ({
    type: SET_NEW_KUNYOUMI,
    payload: {index, newReadingsArray}
})

export const setNewOnyoumi = (newReadingsArray, index) => ({
    type: SET_NEW_ONYOUMI,
    payload: {index, newReadingsArray}
})

export const setNewCardName = (newCardName) => ({
    type: SET_NEW_CARD_NAME,
    payload: newCardName
})

export const setNewCardDescription = (newCardDescription) => ({
    type: SET_NEW_CARD_DESCRIPTION,
    payload: newCardDescription,
})

export const saveCard = (newCard) => ({
    type: SAVE_EDITED_CARD,
    payload: newCard
})