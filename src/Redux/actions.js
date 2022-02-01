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
    REGISTER,
    REMOVE_CARD,
    SET_CURRENT_ALL_READINGS,
    SET_CURRENT_KANJI_INDEX,
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

export const setRandomList = (kanjiList) => {
    const randomedList = kanjiList.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);
    console.log(randomedList);
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
    arrayLog(sourceArray, "setall");
    sourceArray.splice(currentKanjiIndex, 1);
    arrayLog(sourceArray, "arrayWithoutCurrentKanji");
    const firstIncorrectKanjiIndex = Math.round(Math.random() * (sourceArray.length - 1));
    console.log("first index", firstIncorrectKanjiIndex)
    const firstIncorrectKanjiReadings = [
        ...sourceArray[firstIncorrectKanjiIndex].kunyoumi,
        ...sourceArray[firstIncorrectKanjiIndex].onyoumi];
    arrayLog(firstIncorrectKanjiReadings, "first readings");
    let secondIncorrectKanjiIndex;
    while (true) {
        secondIncorrectKanjiIndex = Math.round(Math.random() * (sourceArray.length - 1));
        if (firstIncorrectKanjiIndex !== secondIncorrectKanjiIndex) break;
    }
    console.log("second index", secondIncorrectKanjiIndex)
    const secondIncorrectKanjiReadings = [
        ...sourceArray[secondIncorrectKanjiIndex].kunyoumi,
        ...sourceArray[secondIncorrectKanjiIndex].onyoumi];
    arrayLog(secondIncorrectKanjiReadings, "second readings");
    const allReadings = [...correctReadings, ...firstIncorrectKanjiReadings, ...secondIncorrectKanjiReadings].map(value => ({
        value,
        sort: Math.random()
    }))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
    arrayLog(allReadings, "all readings");
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