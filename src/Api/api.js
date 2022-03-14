import axios from "axios";

const baseUrl = "https://localhost:5001";

const config = (accessToken)=>{
    return {
        headers:{
            'Authorization': `Bearer ${accessToken}`
        }
    }
}

const result = (isError, payload) => ({
    isError, payload : payload
})

export const login = async ({login, password})=>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/login`,{login, password})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data)
    }
}

export const register = async ({userName, email, firstName, lastName, password, isTermsAccepted})=>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/register`, {userName, email, firstName, lastName, password, isTermsAccepted})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data)
    }
}

export const refreshTokens = async ({refreshToken})=>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/refresh`, {refreshToken})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const sendEmailCode = async ({emailCode, userId}) =>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/confirm-email`, {emailCode, userId})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const resetPassword = async ({email}) =>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/verify-email`, {email})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const resetPasswordConfirm = async ({password, email, token}) =>{
    try {
        const resultObject = await axios.post(`${baseUrl}/api/auth/reset-password-confirm?email=${email}&token=${token}`, {password})
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const getUserSets = async (accessToken) =>{
    try {
        const resultObject = await axios.get(`${baseUrl}/api/sets/my-collection`, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const createNewSet = async ({name, description, kanjiList, accessToken}) =>{
    try {
        const resultObject = await axios.put(`${baseUrl}/api/sets/create-set`, {name, description, kanjiList}, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const deleteSet = async ({setId, accessToken}) =>{
    try {
        const resultObject = await axios.put(`${baseUrl}/api/sets/delete-set`, {setId}, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const updateSetName = async ({setId, newName, accessToken}) =>{
    try {
        const resultObject = await axios.patch(`${baseUrl}/api/sets/update-name`, {setId, newName}, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const updateSetDescription = async ({setId, newDescription, accessToken}) =>{
    try {
        const resultObject = await axios.patch(`${baseUrl}/api/sets/update-description`, {setId, newDescription}, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const updateSetKanji = async ({setId, newKanjiList, accessToken}) =>{
    try {
        const resultObject = await axios.patch(`${baseUrl}/api/sets/update-kanji`, {setId, newKanjiList}, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const getAccountInfo = async (accessToken) =>{
    try {
        const resultObject = await axios.get(`${baseUrl}/api/account/`, config(accessToken))
        return result(false, resultObject.data)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const checkEmail = async ({email}) =>{
    try {
        await axios.get(`${baseUrl}/api/auth/check-email?email=${email}`);
        return result(false)
    }catch (e){
        return result(true, e.response.data);
    }
}

export const checkUserName = async ({userName}) =>{
    try {
        await axios.get(`${baseUrl}/api/auth/check-username?userName=${userName}`);
        return result(false)
    }catch (e){
        return result(true, e.response.data);
    }
}