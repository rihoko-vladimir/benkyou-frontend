import useStyle from "./style";

const AuthRouter = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.background}>
                <div className={classes.blur}/>
            </div>
            <div className={classes.container}>
                <div className={classes.card}>

                </div>
            </div>
        </div>
    )

}

export default AuthRouter;