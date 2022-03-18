import {Route, Routes} from "react-router-dom";
import StartPage from "../Pages/StartPage";
import ErrorPage from "../Pages/ErrorPage";
import Registration from "../Components/Auth/RegistrationForm";
import LoginComponent from "../Components/Auth/LoginForm";
import {Typography} from "@mui/material";
import AuthPage from "../Pages/AuthPage";
import HomePageContent from "../Pages/HomePage/Content";
import MySetsPageContent from "../Pages/MySetsPage/Content";
import AllSetsPageContent from "../Pages/AllSetsPage/Content";
import AboutPageContent from "../Pages/AboutPage/Content";
import AccountPage from "../Pages/AccountPage";
import * as paths from "./paths";
import MatchResults from "../Components/Match/MatchResults";
import MatchParent from "../Components/Match/MatchParent";
import LearnContainer from "../Components/LearnContainer";
import HubComponent from "../Components/Hub";
import ForgotPasswordForm from "../Components/Auth/ForgotPasswordForm";
import ResetLinkSent from "../Components/Auth/ResetLinkSent";
import ResetPasswordForm from "../Components/Auth/ResetPasswordForm";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const RoutingComponent = () => {
    return <Routes location={window.location} key={window.location.pathname}>
                <Route path={paths.ERROR_PATH}><Route path={paths.NOT_FOUND_PATH} element={<ErrorPage/>}/></Route>
                <Route path={paths.AUTH_PATH} element={<AuthPage/>}>
                    <Route path={paths.REGISTRATION_PATH} element={<Registration/>}/>
                    <Route path={paths.FORGOT_PATH}>
                        <Route index element={<ForgotPasswordForm/>}/>
                        <Route path={paths.RESET_SENT} element={<ResetLinkSent/>}/>
                    </Route>
                    <Route path={paths.RESET_PASSWORD_CONFIRM} element={<ResetPasswordForm/>}/>
                    <Route index element={<LoginComponent/>}/>
                    <Route path={"*"} element={<Typography variant={"h4"}>Unknown route</Typography>}/>
                </Route>
                <Route path={paths.HUB_PATH} element={<HubComponent/>}>
                    <Route index element={<HomePageContent/>}/>
                    <Route path={paths.MY_SETS_PATH}
                           element={<MySetsPageContent/>}/>
                    <Route path={paths.ALL_SETS_PATH}
                           element={<AllSetsPageContent/>}/>
                    <Route path={paths.ABOUT_PATH}
                           element={<AboutPageContent/>}/>
                    <Route path={paths.ACCOUNT_PATH}
                           element={<AccountPage/>}/>
                </Route>
                <Route path={paths.STUDY_PATH}>
                    {/*<Route index element={<StudyPage/>}/>*/}
                    <Route path={paths.MATCH_PATH}>
                        <Route index element={<LearnContainer render={<MatchParent/>}/>}/>
                        <Route path={paths.FINISH_PATH} element={<LearnContainer render={<MatchResults/>}/>}/>
                    </Route>
                </Route>
                <Route index element={<StartPage/>}/>
                {/*<Route path={"*"} element={<Navigate to={"/error/404"}/>}/>*/}
            </Routes>
}
export default RoutingComponent;
