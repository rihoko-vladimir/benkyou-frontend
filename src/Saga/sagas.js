import {put, all, call, takeEvery, select} from "redux-saga/effects"
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

function* loginWorker(action){
    yield put(actions.startLoading())
    const result = yield call(api.login, {login : action.payload.login, password : action.payload.password});
    if (result.isError) {
        yield put(actions.loginFailure(result.payload.errorMessage));
        yield put(actions.finishLoading())
        return;
    }
    console.log(result)
    const userInfo = yield call(api.getAccountInfo, result.payload.accessToken)
    yield put(actions.tokenSuccess(result.payload));
    yield put(actions.loginSuccess(userInfo.payload))
    yield put(actions.finishLoading())
}

function* checkUserNameWorker(action){
    yield put(actions.startLoading())
    const result = yield call(api.checkUserName, {userName : action.payload})
    if (result.isError) {
        yield put(actions.checkUserNameFailure(result.payload.errorMessage));
        yield put(actions.finishLoading())
        return;
    }
    yield put(actions.checkUserNameSuccess())
    yield put(actions.finishLoading());
}

function* checkEmailWorker(action){
    yield put(actions.startLoading())
    const result = yield call(api.checkEmail, {email : action.payload})
    if (result.isError) {
        yield put(actions.checkEmailFailure(result.payload.errorMessage));
        yield put(actions.finishLoading())
        return;
    }
    yield put(actions.checkEmailSuccess())
    yield put(actions.finishLoading());
}

function* registerWorker(action){
    yield put(actions.startLoading())
    const result = yield call(api.register, action.payload);
    if (result.isError) {
        yield put(actions.registerFailure(result.payload.errorMessage));
        yield put(actions.finishLoading());
        return;
    }
    yield put(actions.registerSuccess(result.payload));
    yield put(actions.finishLoading());
}

function* emailCodeWorker(action){
    yield put(actions.startLoading())
    const result = yield call(api.sendEmailCode, action.payload);
    if (result.isError) {
        yield put(actions.sendEmailCodeFailure(result.payload.errorMessage));
        yield put(actions.finishLoading());
        return;
    }
    yield put(actions.sendEmailCodeSuccess(result.payload));
    yield put(actions.finishLoading());
}

function* setsWorker(){
    yield put(actions.startLoading())
    const tokens = yield select(getTokens);
    const result = yield call(api.getUserSets, tokens.access);
    if (result.isError) {
        yield put(actions.setUserSetsFailure(result.payload.errorMessage));
        yield put(actions.finishLoading());
        return;
    }
    yield put(actions.setUserSetsSuccess(result.payload));
    yield put(actions.finishLoading());
}

