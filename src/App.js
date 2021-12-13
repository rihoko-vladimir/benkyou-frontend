import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutingComponent from "./Components/Router/RoutingComponent";
import {ThemeProvider} from "@mui/styles";
import projectLightTheme from "./Theme/projectTheme";
import {StyledEngineProvider} from "@mui/styled-engine";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./Redux/reducers";
import {loggingMiddleware} from "./Redux/middlewares";


function App() {
    const store = configureStore({
        reducer: reducer,
        middleware: [loggingMiddleware]
    })
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={projectLightTheme}>
                    <BrowserRouter>
                        <RoutingComponent/>
                    </BrowserRouter>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    );
}

export default App;
