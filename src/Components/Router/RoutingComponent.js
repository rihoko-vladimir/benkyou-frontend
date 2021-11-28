import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage/homePage";
import ErrorPage from "../Pages/ErrorPage/errorPage";
import MySetsPage from "../Pages/MySetsPage/mySetsPage";
import AllSetsPage from "../AllSetsPage/allSetsPage";
import AboutPage from "../AboutPage/aboutPage";

const RoutingComponent = () => {
    return (
        <Routes>
            <Route path={"/error"}>
                <Route path={"404"} element={<ErrorPage/>}/>
            </Route>
            <Route path={"/"}>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"my-sets"} element={<MySetsPage/>}/>
                <Route path={"all-sets"} element={<AllSetsPage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"*"} element={<Navigate to={"/error/404"}/>}/>
            </Route>
        </Routes>

    )
};
export default RoutingComponent;
