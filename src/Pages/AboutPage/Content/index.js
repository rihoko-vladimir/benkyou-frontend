import useStyle from "./style";
import {Typography} from "@mui/material";

const AboutPageContent = () => {
    const classes = useStyle();
    return (
        <div className={classes.pageContainer}>
            <Typography
                variant={"h4"}>
                About
            </Typography>
            <div className={classes.contentContainer}>

            </div>
        </div>
    )
};

export default AboutPageContent;