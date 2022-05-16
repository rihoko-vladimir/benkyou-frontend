import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects"
import * as type from "../Redux/types";
import * as api from "../Api/api";
import * as actions from "../Redux/actions";
import {convertSetFromApplicationToRequest, convertSetFromRequestToApplication} from "../Api/converters";

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        registrationWatcher(),
        emailCheckWatcher(),
        usernameCheckWatcher(),
        emailCodeWatcher(),
        getSetsWatcher(),
        createSetWatcher(),
        removeSetWatcher(),
        modifySetWatcher(),
        sendResetTokenWatcher(),
        resetSetPasswordWatcher(),
        changeUserInfoWatcher(),
        getAllSetsWatcher(),
        changeVisibilityWatcher(),
        getAllSetsByQueryWatcher(),
        getAdminAllSetsCountWatcher()
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

function* getAllSetsWatcher() {
    yield takeLatest(type.GET_ALL_SETS, getAllSetsWorker)
}

function* changeVisibilityWatcher() {
    yield takeLatest(type.CHANGE_VISIBILITY, changeVisibilityWorker);
}

function* getAllSetsByQueryWatcher() {
    yield takeLatest(type.GET_ALL_SETS_BY_QUERY, getAllSetsByQueryWorker)
}

function* getAdminAllSetsCountWatcher() {
    yield takeLatest(type.ADMIN_GET_ALL_SETS_COUNT, getAdminAllSetsCountWorker)
}

function* getAdminAllSetsCountWorker() {
    yield requestWorker(
        () => call(api.getSetsCount()),
        data => {
            return put(actions.getAdminAllSetsCountSuccess(data.count))
        },
        errorMessage => put(actions.getAdminAllSetsCountFailure(errorMessage))
    )
}

function* getAllSetsByQueryWorker(action) {
    const {searchQuery, pageNumber} = action.payload;
    yield requestWorker(
        () => call(api.getAllSetsByQuery, {pageNumber, pageSize: 8, query: searchQuery}),
        data => {
            data.sets = data.sets.map(
                unmappedSet => convertSetFromRequestToApplication(unmappedSet));
            return put(actions.getAllSetsByQuerySuccess(data))
        },
        errorMessage => put(actions.getAllSetsByQueryFailure(errorMessage))
    )
}

function* changeVisibilityWorker(action) {
    const isPublic = action.payload;
    yield requestWorker(
        () => call(api.changeVisibility, {isPublic}),
        _ => put(actions.changeVisibilitySuccess(isPublic)),
        errorMessage => put(actions.changeVisibilityFailure(errorMessage))
    )
}

function* getAllSetsWorker(action) {
    const pageNumber = action.payload;
    yield requestWorker(
        () => call(api.getAllSets, {pageNumber, pageSize: 8}),
        data => {
            data.sets = data.sets.map(
                unmappedSet => convertSetFromRequestToApplication(unmappedSet));
            return put(actions.getAllSetsSuccess(data))
        },
        errorMessage => put(actions.getAllSetsFailure(errorMessage))
    )
}

function* changeUserInfoWorker(action) {
    const {firstName, lastName, birthday, about, avatar} = action.payload;
    yield requestWorker(
        () => call(api.updateUserInfo, {
            firstName,
            lastName,
            birthday,
            about,
            avatar
        }),
        data => put(actions.changeUserAccountInfoSuccess({
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            about: data.about,
            avatarUrl: data.avatarUrl
        })),
        errorMessage => put(actions.changeUserAccountInfoFailure(errorMessage))
    )
}

function* resetSetPasswordWorker(action) {
    const {password, email, token} = action.payload;
    yield requestWorker(
        () => call(api.resetPasswordConfirm, {password, email, token}),
        _ => put(actions.resetSetNewPasswordSuccess()),
        errorMessage => put(actions.resetSetNewPasswordFailure(errorMessage))
    )
}

function* resetSendWorker(action) {
    yield requestWorker(
        () => call(api.resetPassword, {email: action.payload}),
        _ => put(actions.resetPasswordSendSuccess()),
        errorMessage => put(actions.resetPasswordSendFailure(errorMessage))
    )
}

function* modifySetWorker(action) {
    yield requestWorker(
        () => call(api.modifySet, {setId: action.payload.id, ...convertSetFromApplicationToRequest(action.payload)}),
        _ => put(actions.modifySetSuccess(action.payload)),
        errorMessage => put(actions.modifySetFailure(errorMessage))
    )
}

function* removeSetWorker(action) {
    yield requestWorker(
        () => call(api.removeSet, {setId: action.payload}),
        _ => put(actions.removeSetSuccess(action.payload)),
        errorMessage => put(actions.removeSetFailure(errorMessage))
    )
}

function* createSetWorker(action) {
    yield requestWorker(
        () => {
            const requestSet = convertSetFromApplicationToRequest(action.payload);
            return call(api.createNewSet, {...requestSet})
        },
        data => put(actions.createSetSuccess(convertSetFromRequestToApplication(data))),
        errorMessage => put(actions.createSetFailure(errorMessage))
    )
}

function* loginWorker(action) {
    yield requestWorker(
        () => call(api.login, {login: action.payload.login, password: action.payload.password}),
        function* (_) {
            const userInfo = yield call(api.getAccountInfo)
            const setsResult = yield call(api.getUserSets);
            yield put(actions.loginSuccess(userInfo.data));
            yield put(actions.setUserSetsSuccess(setsResult.data.map(
                unmappedSet => convertSetFromRequestToApplication(unmappedSet))));
        },
        errorMessage => put(actions.loginFailure(errorMessage))
    )
}

function* checkUserNameWorker(action) {
    yield requestWorker(
        () => call(api.checkUserName, {userName: action.payload}),
        _ => put(actions.checkUserNameSuccess()),
        errorMessage => put(actions.checkUserNameFailure(errorMessage))
    )
}

function* checkEmailWorker(action) {
    yield requestWorker(
        () => call(api.checkEmail, {email: action.payload}),
        _ => put(actions.checkEmailSuccess()),
        errorMessage => put(actions.checkEmailFailure(errorMessage)))
}

function* registerWorker(action) {
    yield requestWorker(
        () => call(api.register, {...action.payload}),
        data => put(actions.registerSuccess(data)),
        errorMessage => put(actions.registerFailure(errorMessage)))
}

function* emailCodeWorker(action) {
    yield requestWorker(
        () => call(api.sendEmailCode, {emailCode: action.payload.emailCode, userId: action.payload.userId}),
        code => put(actions.sendEmailCodeSuccess(code)),
        _ => put(actions.sendEmailCodeFailure()))
}

function* setsWorker() {
    yield requestWorker(
        () => call(api.getUserSets),
        data => put(actions.setUserSetsSuccess(data.map(
            unmappedSet => convertSetFromRequestToApplication(unmappedSet)))),
        errorMessage => put(actions.setUserSetsFailure(errorMessage)))
}

function* requestWorker(apiCallFunction, onSuccess, onFailure) {
    yield put(actions.startLoading())
    try {
        const result = yield apiCallFunction();
        yield onSuccess(result?.data);
    } catch (e) {
        if (e.response.status === 401) {
            yield tokensWorker()
            try {
                const result = yield apiCallFunction();
                yield onSuccess(result?.data);
            } catch (e) {
                yield onFailure(e?.response?.data?.errorMessage)
            }
        } else {
            yield onFailure(e?.response?.data?.errorMessage)
        }
    }
    yield put(actions.finishLoading());
}

function* tokensWorker() {
    try {
        yield call(api.refreshTokens);
        yield put(actions.getNewTokensSuccess())
    } catch (e) {
        console.log(e)
        yield put(actions.getNewTokensFailure(e.response.data.errorMessage));
    }
}

