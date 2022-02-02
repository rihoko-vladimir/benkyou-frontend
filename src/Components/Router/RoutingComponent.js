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
import StudyPage from "../Pages/StudyPage/content/studyPageContent";
import {
    ABOUT_PATH,
    ACCOUNT_PATH,
    ALL_SETS_PATH,
    AUTH_PATH,
    ERROR_PATH,
    FINISH_PATH,
    HUB_PATH,
    MATCH_PATH,
    MY_SETS_PATH,
    NOT_FOUND_PATH,
    REGISTRATION_PATH,
    STUDY_PATH
} from "./paths";
import MatchResults from "../MatchComponent/MatchResults/matchResults";
import MatchParent from "../MatchComponent/MatchParent/matchParent";
import LearnContainer from "../LearnContainerComponent/LearnContainer";

const RoutingComponent = () => {
    const classes = useStyles();
    return <Routes>
        <Route path={ERROR_PATH}><Route path={NOT_FOUND_PATH} element={<ErrorPage/>}/></Route>
        <Route path={AUTH_PATH}>
            <Route path={REGISTRATION_PATH} element={<AuthPage render={<Registration/>}/>}/>
            <Route index element={<AuthPage render={<LoginComponent/>}/>}/>
            <Route path={"*"} element={<Typography variant={"h4"}>Unknown route</Typography>}/>
        </Route>
        <Route path={HUB_PATH}>
            <Route index element={<div className={classes.homePage}><NavigationDrawer/><HomePageContent/></div>}/>
            <Route path={MY_SETS_PATH}
                   element={<div className={classes.homePage}><NavigationDrawer/><MySetsPageContent/></div>}/>
            <Route path={ALL_SETS_PATH}
                   element={<div className={classes.homePage}><NavigationDrawer/><AllSetsPageContent/></div>}/>
            <Route path={ABOUT_PATH}
                   element={<div className={classes.homePage}><NavigationDrawer/><AboutPageContent/></div>}/>
            <Route path={ACCOUNT_PATH}
                   element={<div className={classes.homePage}><NavigationDrawer/><AccountPage/></div>}/>
            <Route path={STUDY_PATH}>
                <Route index element={<StudyPage/>}/>
                <Route path={MATCH_PATH}>
                    <Route index element={<LearnContainer render={<MatchParent/>}/>}/>
                    <Route path={FINISH_PATH} element={<LearnContainer render={<MatchResults/>}/>}/>
                </Route>
            </Route>
        </Route>
        <Route index element={<StartPage/>}/>
        {/*<Route path={"*"} element={<Navigate to={"/error/404"}/>}/>*/}
    </Routes>

}
export default RoutingComponent;
