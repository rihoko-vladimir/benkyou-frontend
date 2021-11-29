import {Navigate, Route, Routes} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/errorPage";
import NavigationDrawer from "../NavigationDrawerComponent/navigationDrawer";
import useStyles from "../Pages/style";
import HomePageContent from "../Pages/HomePage/Content/homepageContent";
import MySetsPageContent from "../Pages/MySetsPage/Content/mySetsPageContent";
import AllSetsPageContent from "../Pages/AllSetsPage/Content/allSetsPageContent";
import AboutPageContent from "../Pages/AboutPage/Content/aboutPageContent";

const RoutingComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.homePage}>
            <NavigationDrawer/>
            <Routes>
                <Route path={"/error"}>
                    <Route path={"404"} element={<ErrorPage/>}/>
                </Route>
                <Route path={"/"}>
                    <Route path={"home"} element={<HomePageContent/>}/>
                    <Route path={"my-sets"} element={<MySetsPageContent/>}/>
                    <Route path={"all-sets"} element={<AllSetsPageContent/>}/>
                    <Route path={"about"} element={<AboutPageContent/>}/>
                    <Route index element={<Navigate to={"home"}/>}/>
                    <Route path={"*"} element={<Navigate to={"/error/404"}/>}/>
                </Route>
            </Routes>
        </div>
    )
};
export default RoutingComponent;
