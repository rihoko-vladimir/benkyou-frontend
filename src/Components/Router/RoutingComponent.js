import LoggedRouter from "./RootRouter/RootRouter";
import AuthRouter from "./AuthRouter/AuthRouter";
import StartPage from "../Pages/StartPage/startPage";

const RoutingComponent = () => {
    switch (window.location.host.split('.')[0]) {
        case "auth": {
            return <AuthRouter/>
        }
        case "study": {
            return <LoggedRouter/>
        }
        default: {
            return <StartPage/>
        }
    }
}
export default RoutingComponent;
