import PropTypes from "prop-types";
import {useDrop} from "react-dnd";
import DraggableReading from "../DraggableReading";
import useStyle from "./style";
import {Typography} from "@mui/material";

const ReadingField = (props) => {
    const classes = useStyle();
    const [{isOver}, drop] = useDrop(() => ({
        accept: "reading",
        collect: (monitor) => ({
            isOver: monitor.isOver({
                shallow: true
            })
        }),
        drop: () => {
            return {name: props.fieldUniqueName}
        }
    }))
    return <div ref={drop} className={classes.container} style={isOver
        ? {
            borderRadius: "12px",
            borderColor: "green",
            borderStyle: "solid",
        }
        : {}}>
        <div className={classes.textContainer}>
            <Typography variant={"body1"}>{props.fieldName}</Typography>
        </div>
        <div className={classes.readingsContainer}>
            {props.currentReadings.map((reading) =>
                <DraggableReading reading={reading} key={reading.length + Math.random() * 24}
                                  onReadingDropped={props.onReadingDropped} parentField={props.fieldUniqueName}/>)}
        </div>
    </div>
}

ReadingField.propTypes = {
    currentReadings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    fieldName: PropTypes.string.isRequired,
    fieldUniqueName: PropTypes.string.isRequired,
    onReadingDropped: PropTypes.func.isRequired,
};

export default ReadingField;