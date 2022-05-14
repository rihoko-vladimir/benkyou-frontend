import PropTypes from "prop-types";
import {Typography} from "@mui/material";
import {useRef} from "react";

const getTimeOfDayText = (hour) =>
    hour < 6 || hour > 22 ?
        "night" :
        hour >= 6 || hour < 12 ?
            "morning"
            : hour >= 12 || hour < 5
                ? "day" :
                "evening";

const TimeOfDayGreeting = (props) => {
    const today = useRef(new Date());
    const textTimeOfDay = getTimeOfDayText(today.current.getHours())
    return <Typography variant={props.variant} {...props}>Good {textTimeOfDay}, {props.name}!</Typography>
}

TimeOfDayGreeting.propTypes = {
    variant: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default TimeOfDayGreeting;