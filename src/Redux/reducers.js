const dummyAccountState = {
    firstName: "Unknown Name",
    lastName: "Unknown Last Name",
    birthDate: "13.12.2021",
    aboutAccount: "lorem ipsum i guess"
}
const dummyCardsState = {myCards: []};

const accountReducer = (state = dummyAccountState, action) => {
    switch (action.type) {
        case "account/changeFirstName":
            return {...state, name: action.payload}
        case "account/changeLastName":
            return {...state, lastName: action.payload}
        case "account/changeBirthDate":
            return {...state, birthDate: action.payload}
        case "account/aboutChange":
            return {...state, aboutAccount: action.payload}
        default:
            console.log("something horrible happened at accountReducer")
    }
}

const myCardsReducer = (state = dummyCardsState, action) => {
    switch (action.type) {
        case "myCards/addNewCard":
            return {myCards: [...state.myCards, action.payload]}
        case "myCards/removeCard":
            return {myCards: [...state.myCards.filter((card) => card.id !== action.payload)]}
        default:
            console.log("something horrible happened at myCardsReducer")
    }
}