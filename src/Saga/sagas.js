import {all, call, put, select, takeEvery, takeLatest} from "redux-saga/effects"
import * as type from "../Redux/types";
import * as api from "../Api/api";
import * as actions from "../Redux/actions";
import {convertSetFromApplicationToRequest, convertSetFromRequestToApplication} from "../Api/converters";

const getTokens = state => state.applicationTokens;

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        registrationWatcher(),
        emailCheckWatcher(),
        usernameCheckWatcher(),
        emailCodeWatcher(),
        getSetsWatcher(),
        saveSetWatcher(),
        createSetWatcher(),
        removeSetWatcher(),
        modifySetWatcher(),
        sendResetTokenWatcher(),
        resetSetPasswordWatcher(),
        changeUserInfoWatcher()
    ])
}

function* loginWatcher() {
    yield takeLatest(type.LOG_IN, loginWorker)
}

function* usernameCheckWatcher() {
    yield takeEvery(type.CHECK_USERNAME, checkUserNameWorker)
}

function* emailCheckWatcher() {
    yield takeEvery(type.CHECK_EMAIL, checkEmailWorker)
}

function* registrationWatcher() {
    yield takeLatest(type.REGISTER, registerWorker)
}

function* emailCodeWatcher() {
    yield takeEvery(type.SEND_EMAIL_CODE, emailCodeWorker)
}

function* getSetsWatcher() {
    yield takeLatest(type.GET_USER_SETS, setsWorker)
}

function* saveSetWatcher() {
    yield takeLatest(type.SAVE_SET, saveSetWorker)
}

function* createSetWatcher() {
    yield takeLatest(type.CREATE_SET, createSetWorker)
}

function* removeSetWatcher() {
    yield takeLatest(type.REMOVE_SET, removeSetWorker)
}

function* modifySetWatcher() {
    yield takeLatest(type.EDIT_SET, modifySetWorker)
}

function* sendResetTokenWatcher() {
    yield takeLatest(type.RESET_PASSWORD_SEND, resetSendWorker)
}

function* resetSetPasswordWatcher() {
    yield takeLatest(type.RESET_PASSWORD_SET, resetSetPasswordWorker)
}

function* changeUserInfoWatcher() {
    yield takeLatest(type.CHANGE_USER_ACCOUNT, changeUserInfoWorker)
}

function* changeUserInfoWorker(action) {
    yield put(actions.startLoading())
    const {firstName, lastName, birthday, about, avatar} = action.payload;
    let tokens = yield select(getTokens);
    try {
        const response = yield call(api.updateUserInfo, {
            accessToken: tokens.access,
            firstName,
            lastName,
            birthday,
            about,
            avatar
        });
        yield put(actions.changeUserAccountInfoSuccess({
            userName: response.data.userName,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            birthday: response.data.birthday,
            about: response.data.about,
            avatarUrl: response.data.avatarUrl
        }));
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            tokens = yield select(getTokens);
            try {
                const response = yield call(api.updateUserInfo, {
                    accessToken: tokens.access,
                    firstName,
                    lastName,
                    birthday,
                    about,
                    avatar
                });
                yield put(actions.changeUserAccountInfoSuccess({
                    userName: response.userName,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    birthday: response.birthday,
                    about: response.about,
                    avatarUrl: response.avatarUrl
                }));
            } catch (e) {
                yield put(actions.changeUserAccountInfoFailure(e.response.data.errorMessage))
            }
        } else {
            yield put(actions.changeUserAccountInfoFailure(e.response.data.errorMessage));
        }
    }
    yield put(actions.finishLoading());
}

function* resetSetPasswordWorker(action) {
    yield put(actions.startLoading())
    const {password, email, token} = action.payload;
    try {
        yield call(api.resetPasswordConfirm, {password, email, token})
        yield put(actions.resetSetNewPasswordSuccess())
    } catch (e) {
        yield put(actions.resetSetNewPasswordFailure(e.response.data.errorMessage))
    }
    yield put(actions.finishLoading())
}

function* resetSendWorker(action) {
    yield put(actions.startLoading())
    try {
        yield call(api.resetPassword, {email: action.payload})
        yield put(actions.resetPasswordSendSuccess())
    } catch (e) {
        yield put(actions.resetPasswordSendFailure(e.response.data.errorMessage))
    }
    yield put(actions.finishLoading())
}

function* modifySetWorker(action) {
    yield put(actions.startLoading())
    let tokens = yield select(getTokens);
    const modifiedSet = action.payload;
    const requestSet = convertSetFromApplicationToRequest(modifiedSet);
    try {
        yield call(api.modifySet, {accessToken: tokens.access, setId: modifiedSet.id, ...requestSet});
        yield put(actions.modifySetSuccess(modifiedSet));
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            tokens = yield select(getTokens);
            try {
                yield call(api.modifySet, {accessToken: tokens.access, setId: modifiedSet.id, ...requestSet});
                yield put(actions.modifySetSuccess(modifiedSet));
            } catch (e) {
                yield put(actions.modifySetFailure(e.response.data.errorMessage))
            }
        } else {
            yield put(actions.modifySetFailure(e.response.data.errorMessage));
        }
    }
    yield put(actions.finishLoading());
}

function* removeSetWorker(action) {
    yield put(actions.startLoading())
    let tokens = yield select(getTokens);
    const setId = action.payload;
    try {
        const result = yield call(api.removeSet, {accessToken: tokens.access, setId: setId});
        console.log(result);
        yield put(actions.removeSetSuccess(setId));
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            tokens = yield select(getTokens);
            try {
                yield call(api.removeSet, {accessToken: tokens.access, setId});
                yield put(actions.removeSetSuccess(setId));
            } catch (e) {
                yield put(actions.removeSetFailure(e.response.data.errorMessage))
            }
        } else {
            yield put(actions.removeSetFailure(e.response.data.errorMessage));
        }
    }
    yield put(actions.finishLoading());
}

function* createSetWorker(action) {
    yield put(actions.startLoading())
    let tokens = yield select(getTokens);
    const createdSet = action.payload;
    console.log(createdSet)
    const requestSet = convertSetFromApplicationToRequest(createdSet);
    try {
        const result = yield call(api.createNewSet, {accessToken: tokens.access, ...requestSet});
        yield put(actions.createSetSuccess(convertSetFromRequestToApplication(result.data)));
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            tokens = yield select(getTokens);
            try {
                const result = yield call(api.createNewSet, {accessToken: tokens.access, ...requestSet});
                yield put(actions.createSetSuccess(convertSetFromRequestToApplication(result.data)));
            } catch (e) {
                yield put(actions.createSetFailure(e.response.data.errorMessage))
            }
        } else {
            yield put(actions.createSetFailure(e.response.data.errorMessage));
        }
    }
    yield put(actions.finishLoading());
}

function* saveSetWorker(action) {

}

function* tokensWorker() {
    let tokens = yield select(getTokens);
    try {
        const result = yield call(api.refreshTokens, {refreshToken: tokens.refresh});
        yield put(actions.getNewTokensSuccess({access: result.data.accessToken, refresh: result.data.refreshToken}))
    } catch (e) {
        yield put(actions.getNewTokensFailure(e.response.data.errorMessage));
    }
}

function* loginWorker(action) {
    yield put(actions.startLoading())
    try {
        const result = yield call(api.login, {login: action.payload.login, password: action.payload.password});
        const userInfo = yield call(api.getAccountInfo, {accessToken: result.data.accessToken})
        const setsResult = yield call(api.getUserSets, {accessToken: result.data.accessToken});
        yield put(actions.tokenSuccess(result.data));
        yield put(actions.loginSuccess(userInfo.data));
        yield put(actions.setUserSetsSuccess(setsResult.data.map(
            unmappedSet => convertSetFromRequestToApplication(unmappedSet))));
    } catch (e) {
        yield put(actions.loginFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading())
}

function* checkUserNameWorker(action) {
    yield put(actions.startLoading())
    try {
        yield call(api.checkUserName, {userName: action.payload})
        yield put(actions.checkUserNameSuccess())
    } catch (e) {
        yield put(actions.checkUserNameFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* checkEmailWorker(action) {
    yield put(actions.startLoading())
    try {
        yield call(api.checkEmail, {email: action.payload})
        yield put(actions.checkEmailSuccess())
    } catch (e) {
        yield put(actions.checkEmailFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* registerWorker(action) {
    yield put(actions.startLoading())
    try {
        const result = yield call(api.register, {...action.payload});
        yield put(actions.registerSuccess(result.data));
    } catch (e) {
        yield put(actions.registerFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* emailCodeWorker(action) {
    yield put(actions.startLoading())
    try {
        const result = yield call(api.sendEmailCode, {
            emailCode: action.payload.emailCode,
            userId: action.payload.userId
        });
        yield put(actions.sendEmailCodeSuccess(result.data));
    } catch (e) {
        console.log(e)
        yield put(actions.sendEmailCodeFailure());
    }
    yield put(actions.finishLoading());
}

function* setsWorker() {
    yield put(actions.startLoading())
    let tokens = yield select(getTokens);
    try {
        const result = yield call(api.getUserSets, {accessToken: tokens.access});
        yield put(actions.setUserSetsSuccess(result.data.map(
            unmappedSet => convertSetFromRequestToApplication(unmappedSet))));
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            tokens = yield select(getTokens);
            try {
                const result = yield call(api.getUserSets, {accessToken: tokens.access});
                yield put(actions.setUserSetsSuccess(result.data.map(
                    unmappedSet => convertSetFromRequestToApplication(unmappedSet))));
            } catch (e) {
                yield put(actions.setUserSetsFailure(e.response.data.errorMessage))
            }
        } else {
            yield put(actions.setUserSetsFailure(e.response.data.errorMessage));
        }
    }
    yield put(actions.finishLoading());
}

