export const loggingMiddleware = store => next => action => {
    console.log("Now processing:", action)
    console.log("Original state", store.getState());
    next(action);
    console.log("After action", store.getState());
}