import axios from "axios";

const baseUrl = "http://localhost:5000";

const config = {withCredentials: true}

export const login = async ({login, password}) =>
    await axios.post(`${baseUrl}/api/auth/login`, {login, password}, config)

export const register = async ({userName, email, firstName, lastName, password, isTermsAccepted}) =>
    await axios.post(`${baseUrl}/api/auth/register`, {userName, email, firstName, lastName, password, isTermsAccepted})

export const refreshTokens = async () =>
    await axios.post(`${baseUrl}/api/auth/refresh`,undefined, config)

export const sendEmailCode = async ({emailCode, userId}) =>
    await axios.post(`${baseUrl}/api/auth/confirm-email`, {emailCode, userId})

export const resetPassword = async ({email}) =>
    await axios.post(`${baseUrl}/api/auth/reset-password`, {email})

export const resetPasswordConfirm = async ({password, email, token}) =>
    await axios.post(`${baseUrl}/api/auth/reset-password-confirm?email=${email}&token=${encodeURIComponent(token)}`, {password})

export const getUserSets = async () =>
    await axios.get(`${baseUrl}/api/sets/my-collection`, config)

export const createNewSet = async ({name, description, kanjiList}) =>
    await axios.put(`${baseUrl}/api/sets/create`, {name, description, kanjiList}, config)

export const removeSet = async ({setId}) =>
    await axios.delete(`${baseUrl}/api/sets/delete?setId=${setId}`, config)

export const modifySet = async ({setId, name, description, kanjiList}) =>
    await axios.put(`${baseUrl}/api/sets/modify`, {setId, name, description, kanjiList}, config)

export const getAllSets = async ({pageNumber, pageSize}) =>
    await axios.get(`${baseUrl}/api/sets/all?page=${pageNumber}&size=${pageSize}`, config)

export const getAllSetsByQuery = async ({pageNumber, pageSize, query}) =>
    await axios.get(`${baseUrl}/api/sets/all_search?page=${pageNumber}&size=${pageSize}&name=${query}`, config)

export const changeVisibility = async ({isPublic}) =>
    await axios.patch(`${baseUrl}/api/account/change-visibility?isPublic=${isPublic}`,undefined, config)

export const getAccountInfo = async () =>
    await axios.get(`${baseUrl}/api/account/`, config)

export const updateUserInfo = async ({firstName, lastName, birthday, about, avatar}) =>
    await axios.put(`${baseUrl}/api/account/modify`, {
        firstName,
        lastName,
        birthday,
        about,
        avatar
    }, config)

export const checkEmail = async ({email}) =>
    await axios.get(`${baseUrl}/api/auth/check-email?email=${email}`);


export const checkUserName = async ({userName}) =>
    await axios.get(`${baseUrl}/api/auth/check-username?userName=${userName}`);

export const getUserCount = async () =>
    await axios.get(`${baseUrl}/api/admin/usersCount`, config);

export const getSetsCount = async () =>
    await axios.get(`${baseUrl}/api/admin/setsCount`, config);
