import {Typography} from "@mui/material";
import useStyle from "./style";

const HomePageContent = () => {
    const classes = useStyle();
    return (
        <div className={classes.homePageContainer}>
            <Typography variant={"h4"}>Welcome to the 勉強！</Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto at dicta distinctio
                eaque eveniet, incidunt, ipsum magnam nemo nisi nobis odio officia placeat porro ratione reiciendis
                repellat veritatis!lorem </p>
        </div>);
}

export default HomePageContent;