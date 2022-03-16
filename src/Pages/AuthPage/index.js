import useStyle from "./style";
import {Outlet} from "react-router-dom";

const AuthPage = (props) => {
    const classes = useStyle();
    return (<div className={classes.container}>
        <div className={classes.background}>
            <div className={classes.blur}/>
        </div>
        <div className={classes.container}>
            <div className={classes.card}>
                <Outlet/>
            </div>
        </div>
    </div>)
}

export default AuthPage;