export const loggingMiddleware = store=>next=>action=>{
    console.log("Original state", store.getState());
    console.log("Now processing:", action)
    next(action);
    console.log("After action", store.getState())
}