import PropTypes from "prop-types";
import {useDrop} from "react-dnd";
import DraggableReading from "../DraggableReading/draggableReading";
import useStyle from "./style";
import {Typography} from "@mui/material";

const ReadingField = (props) => {
    const classes = useStyle();
    const [{}, drop] = useDrop(() => ({
        accept: "reading",
        drop: () => {
            return {name: props.fieldUniqueName}
        }
    }))
    return <div ref={drop} className={classes.container}>
        <Typography variant={"subtitle1"}>{props.fieldName}</Typography>{props.currentReadings.map((reading) =>
        <DraggableReading reading={reading} key={reading.length + Math.random() * 24}
                          onReadingDropped={props.onReadingDropped} parentField={props.fieldUniqueName}/>)}
    </div>
}

ReadingField.propTypes = {
    currentReadings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    fieldName: PropTypes.string.isRequired,
    fieldUniqueName: PropTypes.string.isRequired,
    onReadingDropped: PropTypes.func.isRequired,
};

export default ReadingField;