const loggingMiddleware = store=>next=>action=>{
    console.log(`Now processing ${action.type}`);
    console.log(`State ${store.getState()}`)
    return next(action);
}