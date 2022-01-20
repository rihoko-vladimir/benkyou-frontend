import AuthPage from "../../Pages/AuthPage/authPage";
import LoginComponent from "../../LoginComponent/login";
import {Route, Routes} from "react-router-dom";
import {Typography} from "@mui/material";
import Registration from "../../../RegistrationComponent/registration";

const AuthRouter = () => {
    //currently just a page, i'll split everything in a future
    //TODO add registration
    return <AuthPage render={
        <Routes>
            <Route path={"registration"} element={<Registration/>}/>
            <Route index element={<LoginComponent/>}/>
            <Route path={"*"} element={<Typography variant={"h4"}>Unknown route</Typography>}/>
        </Routes>
    }/>
}

export default AuthRouter;