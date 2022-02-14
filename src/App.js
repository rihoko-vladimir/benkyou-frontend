import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutingComponent from "./Router";
import {StyledEngineProvider} from "@mui/styled-engine";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./Redux/reducers";
import {loggingMiddleware} from "./Redux/middlewares";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer, persistStore} from "redux-persist";
import persistStorage from "redux-persist/lib/storage"
import {PersistGate} from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga"
import {ThemeProvider} from "@mui/styles";
import theme from "./theme";


function App() {
    const persistConfig = {
        key: "APPLICATION_STORAGE",
        storage: persistStorage
    };
    const sagaMiddleware = createSagaMiddleware();
    const reducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(loggingMiddleware, sagaMiddleware)));
    const persist = persistStore(store);
    // sagaMiddleware.run()
    return (
        <Provider store={store}>
            <PersistGate loadint={null} persistor={persist}>
                <ThemeProvider theme={theme}>
                    <StyledEngineProvider injectFirst>
                        <BrowserRouter>
                            <RoutingComponent/>
                        </BrowserRouter>
                    </StyledEngineProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
