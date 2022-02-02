import PropTypes from "prop-types"
import useStyle from "./style";
import {Typography} from "@mui/material";

export const resultTypes = {
    correct: "rgba(67, 160, 71, 1)",
    incorrect: "rgba(244, 67, 54, 0.87)",
    required: "rgba(255, 179, 0, 1)",
}

const ResultReading = ({reading, type}) => {
    const classes = useStyle();
    return <div className={classes.reading} style={{backgroundColor: type}}>
        <Typography variant={"body2"}>{reading}</Typography>
    </div>
}

export default ResultReading;

ResultReading.propTypes = {
    reading: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

