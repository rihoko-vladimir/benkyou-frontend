import LoggedRouter from "./RootRouter/RootRouter";
import AuthRouter from "./AuthRouter/AuthRouter";
import {Route, Routes} from "react-router-dom";
import StartPage from "../Pages/StartPage/startPage";

const RoutingComponent = () => {
    return <Routes>
        <Route path={"auth"} element={<AuthRouter/>}/>
        <Route path={"study"} element={<LoggedRouter/>}/>
        <Route path={"*"} element={<StartPage/>}/>
    </Routes>

}
export default RoutingComponent;
