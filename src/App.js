import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutingComponent from "./Components/Router/RoutingComponent";
import {ThemeProvider} from "@mui/styles";
import projectLightTheme from "./Theme/projectTheme";
import {StyledEngineProvider} from "@mui/styled-engine";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./Redux/reducers";
import {loggingMiddleware} from "./Redux/middlewares";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer, persistStore} from "redux-persist";
import persistStorage from "redux-persist/lib/storage"
import {PersistGate} from "redux-persist/integration/react";


function App() {
    const persistConfig = {
        key: "APPLICATION_STORAGE",
        storage: persistStorage
    }
    const reducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(loggingMiddleware)));
    const persist = persistStore(store);
    return (
        <Provider
            store={store}>
            <PersistGate loadint={null} persistor={persist}>
                <StyledEngineProvider
                    injectFirst>
                    <ThemeProvider
                        theme={projectLightTheme}>
                        <BrowserRouter>
                            <RoutingComponent/>
                        </BrowserRouter>
                    </ThemeProvider>
                </StyledEngineProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
