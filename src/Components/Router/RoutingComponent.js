import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/homePage";
import ErrorPage from "../Pages/ErrorPage/errorPage";

const RoutingComponent = () => {
    return (
        <Routes>
            <Route path={"/error"}>
                <Route path={"404"} element={<ErrorPage/>}/>
            </Route>
            <Route path={"/"}>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"my-sets"} element={<HomePage/>}/>
                <Route path={"all-sets"} element={<HomePage/>}/>
                <Route path={"about"} element={<HomePage/>}/>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"*"} element={<Navigate to={"/error/404"}/>}/>
            </Route>
        </Routes>

    )
};
export default RoutingComponent;
