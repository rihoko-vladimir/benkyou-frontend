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


function App() {
    const store = createStore(rootReducer, applyMiddleware(loggingMiddleware));
    return (
        <Provider
            store={store}>
            <StyledEngineProvider
                injectFirst>
                <ThemeProvider
                    theme={projectLightTheme}>
                    <BrowserRouter>
                        <RoutingComponent/>
                    </BrowserRouter>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    );
}

export default App;
