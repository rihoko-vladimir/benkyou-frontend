import {Route, Routes} from "react-router-dom";
import StartPage from "../Pages/StartPage/startPage";
import ErrorPage from "../Pages/ErrorPage/errorPage";
import Registration from "../RegistrationComponent/registration";
import LoginComponent from "../LoginComponent/login";
import {Typography} from "@mui/material";
import AuthPage from "../Pages/AuthPage/authPage";
import useStyles from "./style";
import NavigationDrawer from "../NavigationDrawerComponent/navigationDrawer";
import HomePageContent from "../Pages/HomePage/Content/homepageContent";
import MySetsPageContent from "../Pages/MySetsPage/Content/mySetsPageContent";
import AllSetsPageContent from "../Pages/AllSetsPage/Content/allSetsPageContent";
import AboutPageContent from "../Pages/AboutPage/Content/aboutPageContent";
import AccountPage from "../Pages/AccountPage/accountPage";

const RoutingComponent = () => {
    const classes = useStyles();
    return <Routes>
        <Route path={"error"}><Route path={"404"} element={<ErrorPage/>}/></Route>
        <Route path={"auth"}>
            <Route path={"registration"} element={<AuthPage render={<Registration/>}/>}/>
            <Route index element={<AuthPage render={<LoginComponent/>}/>}/>
            <Route path={"*"} element={<Typography variant={"h4"}>Unknown route</Typography>}/>
        </Route>
        <Route path={"study"}>
            <Route index element={<div className={classes.homePage}><NavigationDrawer/><HomePageContent/></div>}/>
            <Route path={"my-sets"}
                   element={<div className={classes.homePage}><NavigationDrawer/><MySetsPageContent/></div>}/>
            <Route path={"all-sets"}
                   element={<div className={classes.homePage}><NavigationDrawer/><AllSetsPageContent/></div>}/>
            <Route path={"about"}
                   element={<div className={classes.homePage}><NavigationDrawer/><AboutPageContent/></div>}/>
            <Route path={"account"}
                   element={<div className={classes.homePage}><NavigationDrawer/><AccountPage/></div>}/>
        </Route>
        <Route index element={<StartPage/>}/>
        {/*<Route path={"*"} element={<Navigate to={"/error/404"}/>}/>*/}
    </Routes>

}
export default RoutingComponent;
