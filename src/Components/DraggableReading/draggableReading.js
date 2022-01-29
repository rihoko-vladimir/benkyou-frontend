import useStyle from "./style";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";

const DraggableReading = ({reading}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "reading",
        item: {reading},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    const classes = useStyle();
    return <div className={classes.reading} ref={drag}>
        <Typography variant={"body2"}>{reading}</Typography>
    </div>
}

DraggableReading.propTypes = {
    reading: PropTypes.string.isRequired,
};

export default DraggableReading;