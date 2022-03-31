import axios from "axios";

const baseUrl = "https://localhost:5001";

const config = (accessToken) => {
    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
}

export const login = async ({login, password}) =>
    await axios.post(`${baseUrl}/api/auth/login`, {login, password})

export const register = async ({userName, email, firstName, lastName, password, isTermsAccepted}) =>
    await axios.post(`${baseUrl}/api/auth/register`, {userName, email, firstName, lastName, password, isTermsAccepted})

export const refreshTokens = async ({refreshToken}) =>
    await axios.post(`${baseUrl}/api/auth/refresh`, {refreshToken})

export const sendEmailCode = async ({emailCode, userId}) =>
    await axios.post(`${baseUrl}/api/auth/confirm-email`, {emailCode, userId})

export const resetPassword = async ({email}) =>
    await axios.post(`${baseUrl}/api/auth/reset-password`, {email})

export const resetPasswordConfirm = async ({password, email, token}) =>
    await axios.post(`${baseUrl}/api/auth/reset-password-confirm?email=${email}&token=${encodeURIComponent(token)}`, {password})

export const getUserSets = async ({accessToken}) =>
    await axios.get(`${baseUrl}/api/sets/my-collection`, config(accessToken))

export const createNewSet = async ({accessToken, name, description, kanjiList}) =>
    await axios.put(`${baseUrl}/api/sets/create`, {name, description, kanjiList}, config(accessToken))

export const removeSet = async ({accessToken, setId}) =>
    await axios.delete(`${baseUrl}/api/sets/delete?setId=${setId}`, config(accessToken))

export const modifySet = async ({accessToken, setId, name, description, kanjiList}) =>
    await axios.put(`${baseUrl}/api/sets/modify`, {setId, name, description, kanjiList}, config(accessToken))

export const getAllSets = async ({pageNumber, pageSize, accessToken}) =>
    await axios.get(`${baseUrl}/api/sets/all?page=${pageNumber}&size=${pageSize}`, config(accessToken))

export const changeVisibility = async ({accessToken, isPublic}) =>
    await axios.patch(`${baseUrl}/api/account/change-visibility?isPublic=${isPublic}`,undefined, config(accessToken))

export const getAccountInfo = async ({accessToken}) =>
    await axios.get(`${baseUrl}/api/account/`, config(accessToken))

export const updateUserInfo = async ({accessToken, firstName, lastName, birthday, about, avatar}) =>
    await axios.put(`${baseUrl}/api/account/modify`, {
        firstName,
        lastName,
        birthday,
        about,
        avatar
    }, config(accessToken))

export const checkEmail = async ({email}) =>
    await axios.get(`${baseUrl}/api/auth/check-email?email=${email}`);


export const checkUserName = async ({userName}) =>
    await axios.get(`${baseUrl}/api/auth/check-username?userName=${userName}`);
