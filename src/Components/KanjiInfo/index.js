import PropTypes from "prop-types";
import useStyle from "./style";

const KanjiInfo = (props) => {
    const classes = useStyle();
    return (
        <div
            className={classes.kanjiInfoContainer}>
                <p
                    className={classes.kanji}>
                    {props.kanjiObject.kanji}
                </p>
            <div
                className={classes.kanjiReadings}>
                <div
                    className={classes.reading}>
                    <p>
                        {props.kanjiObject.kunyoumi.join(", ")}
                    </p>
                </div>
                <div
                    className={classes.reading}>
                    <p>
                        {props.kanjiObject.onyoumi.join(", ")}
                    </p>
                </div>
            </div>
        </div>);

}

KanjiInfo.propTypes = {
    kanjiObject: PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
}

export default KanjiInfo;