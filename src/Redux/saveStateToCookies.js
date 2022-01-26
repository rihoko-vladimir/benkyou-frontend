import Cookies from 'js-cookie'

export const loadState = () => {
    const cookies = Cookies.get();
    const state = {};
    for (const cookieName in cookies) {
        state[cookieName] = JSON.parse(cookies[cookieName]);
    }
    return state;
};

export const saveState = (state) => {
    for (const stateKey in state) {
        console.log("cookie "+stateKey,state[stateKey])
        const hostname = window.location.hostname;
        Cookies.set(`${stateKey}`, JSON.stringify(state[stateKey]), {domain: hostname, expires: 30, sameSite: "Lax"})
    }
    console.log("saved cookies:", Cookies.get())
};