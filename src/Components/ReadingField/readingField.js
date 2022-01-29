import PropTypes from "prop-types";
import {useDrop} from "react-dnd";
import DraggableReading from "../DraggableReading/draggableReading";

const ReadingField = (props) => {
    const [{},drop] = useDrop(() => ({
        accept: "reading",
        drop: (item) => {
            props.onReadingsCallback([...props.currentReadings, item.reading])
        }
    }))
    return <div ref={drop}>
        {props.currentReadings.map((reading) => <DraggableReading reading={reading}
                                                                  key={reading.length + Math.random() * 24}/>)}
    </div>
}

ReadingField.propTypes = {
    currentReadings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onReadingsCallback: PropTypes.func.isRequired
};

export default ReadingField;