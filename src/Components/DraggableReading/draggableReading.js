import useStyle from "./style";
import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";

const DraggableReading = (props) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "reading",
        item: {reading: props.reading},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (draggedItem, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult)
                props.onReadingDropped({from: props.parentField, to: dropResult.name, reading: props.reading})
        }
    }));
    const classes = useStyle();
    return <div className={classes.reading} ref={drag} style={isDragging
        ? {
            backgroundColor: "rgba(130,196,203,0.05)",
            color: "darkcyan",
        }
        : {}}>
        <Typography variant={"body2"}>{props.reading}</Typography>
    </div>
}

DraggableReading.propTypes = {
    reading: PropTypes.string.isRequired,
    onReadingDropped: PropTypes.func.isRequired,
    parentField: PropTypes.string.isRequired
};

export default DraggableReading;