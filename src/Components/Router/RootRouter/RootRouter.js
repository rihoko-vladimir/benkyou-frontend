import NavigationDrawer from "../../NavigationDrawerComponent/navigationDrawer";
import {Navigate, Route, Routes} from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/errorPage";
import HomePageContent from "../../Pages/HomePage/Content/homepageContent";
import MySetsPageContent from "../../Pages/MySetsPage/Content/mySetsPageContent";
import AllSetsPageContent from "../../Pages/AllSetsPage/Content/allSetsPageContent";
import AboutPageContent from "../../Pages/AboutPage/Content/aboutPageContent";
import AccountPage from "../../Pages/AccountPage/accountPage";
import useStyles from "./style";

const RootRouter = () => {
    const classes = useStyles();
    return (
        <div className={classes.homePage}>
            <NavigationDrawer/>
            <Routes>
                <Route
                    path={"/error"}>
                    <Route
                        path={"404"}
                        element={<ErrorPage/>}/>
                </Route>
                <Route
                    path={"/"}>
                    <Route
                        path={"my-sets"}
                        element={<MySetsPageContent/>}/>
                    <Route
                        path={"all-sets"}
                        element={<AllSetsPageContent/>}/>
                    <Route
                        path={"about"}
                        element={<AboutPageContent/>}/>
                    <Route
                        path={"account"}
                        element={<AccountPage/>}/>
                    <Route
                        index
                        element={<HomePageContent/>}/>
                    <Route
                        path={"*"}
                        element={<Navigate to={"/error/404"}/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default RootRouter;