import useStyle from "./style";
import PropTypes from "prop-types";

const AuthPage = (props) => {
    const classes = useStyle();
    return (<div className={classes.container}>
        <div className={classes.background}>
            <div className={classes.blur}/>
        </div>
        <div className={classes.container}>
            <div className={classes.card}>
                {props.render}
            </div>
        </div>
    </div>)
}

AuthPage.propTypes = {
    render: PropTypes.element.isRequired
}

export default AuthPage;