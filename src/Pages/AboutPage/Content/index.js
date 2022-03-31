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
        </div>
    )
};

export default AboutPageContent;