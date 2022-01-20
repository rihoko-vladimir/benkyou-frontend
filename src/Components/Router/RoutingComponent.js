import RootRouter from "./RootRouter/RootRouter";
import AuthRouter from "./AuthRouter/AuthRouter";

const RoutingComponent = () => {
    if (window.location.host.split('.')[0] === "auth"){
        return <AuthRouter/>
    }else {
        return <RootRouter/>
    }
}
    export default RoutingComponent;
