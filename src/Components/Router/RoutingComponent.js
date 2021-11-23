import {Route, Routes} from "react-router";
import HomePage from "../Pages/HomePage/homePage";

const RoutingComponent = () => {
    return (<div>
            <Routes>
                <Route path={"/"} element={
                    <Routes>
                        <Route path={""} element={<HomePage/>}/>
                    </Routes>}/>
                <Route path={`/error`} element={
                    <Routes>
                    </Routes>}/>
            </Routes>
        </div>
    )
};
export default RoutingComponent;
