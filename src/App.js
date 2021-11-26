import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutingComponent from "./Components/Router/RoutingComponent";



function App() {
    return (
        <BrowserRouter>
            <RoutingComponent/>
        </BrowserRouter>
    );
}

export default App;
