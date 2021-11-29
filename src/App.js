import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutingComponent from "./Components/Router/RoutingComponent";
import {ThemeProvider} from "@mui/styles";
import projectLightTheme from "./Theme/projectTheme";
import {StyledEngineProvider} from "@mui/styled-engine";


function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={projectLightTheme}>
                <BrowserRouter>
                    <RoutingComponent/>
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
