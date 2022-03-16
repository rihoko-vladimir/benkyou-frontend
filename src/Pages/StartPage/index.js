import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router";

const StartPage = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.account.isLoggedIn);
    useEffect(() => {
        if (isAuthenticated) navigate("/hub");
        else navigate("/auth")
    }, [isAuthenticated])
    return null;
}

export default StartPage;