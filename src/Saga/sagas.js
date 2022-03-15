import {put, all, call, takeEvery, select, takeLatest} from "redux-saga/effects"
import * as type from "../Redux/types";
import * as api from "../Api/api";
import * as actions from "../Redux/actions";

const getTokens = state => state.applicationTokens;

export default function* rootSaga(){
    yield all([
        loginWatcher(),
        registrationWatcher(),
        emailCheckWatcher(),
        usernameCheckWatcher(),
        emailCodeWatcher(),
        setsWatcher()
    ])
}

function* loginWatcher(){
    yield takeEvery(type.LOG_IN, loginWorker)
}
function* usernameCheckWatcher(){
    yield takeEvery(type.CHECK_USERNAME, checkUserNameWorker)
}
function* emailCheckWatcher(){
    yield takeEvery(type.CHECK_EMAIL, checkEmailWorker)
}
function* registrationWatcher(){
    yield takeEvery(type.REGISTER, registerWorker)
}

function* emailCodeWatcher(){
    yield takeEvery(type.SEND_EMAIL_CODE, emailCodeWorker)
}

function* setsWatcher(){
    yield takeEvery(type.GET_USER_SETS,setsWorker)
}

function* tokensWatcher(){
    yield takeLatest(type.GET_NEW_TOKENS, tokensWorker)
}

function* tokensWorker(){
    let tokens = yield select(getTokens);
    const result = yield call(api.refreshTokens, {refreshToken: tokens.refresh});
    if (result.isError) {
        yield put(actions.getNewTokensFailure(result.payload.data.errorMessage));
        return;
    }
    yield put(actions.getNewTokensSuccess(result.payload.data))
}

function* loginWorker(action){
    yield put(actions.startLoading())
    try {
        const result = yield call(api.login, {login : action.payload.login, password : action.payload.password});
        console.log(result)
        const userInfo = yield call(api.getAccountInfo, {accessToken : result.data.accessToken})
        yield put(actions.tokenSuccess(result.data));
        yield put(actions.loginSuccess(userInfo.data))
    }catch (e){
        yield put(actions.loginFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading())
}

function* checkUserNameWorker(action){
    yield put(actions.startLoading())
    try {
        yield call(api.checkUserName, {userName : action.payload})
        yield put(actions.checkUserNameSuccess())
    }catch (e){
        yield put(actions.checkUserNameFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* checkEmailWorker(action){
    yield put(actions.startLoading())
    try {
        yield call(api.checkEmail, {email : action.payload})
        yield put(actions.checkEmailSuccess())
    }catch (e){
        yield put(actions.checkEmailFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* registerWorker(action){
    yield put(actions.startLoading())
    try {
        const result = yield call(api.register, {...action.payload});
        yield put(actions.registerSuccess(result.data));
    }catch (e){
        yield put(actions.registerFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

function* emailCodeWorker(action){
    yield put(actions.startLoading())
    try {
        const result = yield call(api.sendEmailCode, {emailCode : action.payload.emailCode, userId: action.payload.userId});
        yield put(actions.sendEmailCodeSuccess(result.data));
    }catch (e){
        console.log(e)
        yield put(actions.sendEmailCodeFailure());
    }
    yield put(actions.finishLoading());
}

function* setsWorker(){
    yield put(actions.startLoading())
    try {
        let tokens = yield select(getTokens);
        const result = yield call(api.getUserSets, {accessToken: tokens.access});
        yield put(actions.setUserSetsSuccess(result.data));
    }catch (e){
        yield put(actions.setUserSetsFailure(e.response.data.errorMessage));
    }
    yield put(actions.finishLoading());
}

