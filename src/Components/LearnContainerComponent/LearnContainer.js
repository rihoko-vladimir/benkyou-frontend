import PropTypes from "prop-types";
import useStyle from "./style";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const LearnContainer = props => {
    const classes = useStyle();
    return <DndProvider backend={HTML5Backend}>
        <div className={classes.container}>
            <div className={classes.card}>
                {props.render}
            </div>
        </div>
    </DndProvider>
}

LearnContainer.propTypes = {
    render: PropTypes.element.isRequired
};

export default LearnContainer