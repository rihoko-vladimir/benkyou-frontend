import PropTypes from "prop-types";
import StudyPage from "../Pages/StudyPage/content/studyPageContent";

const Match = (props)=>{
    return <p>Some match logic will be here soon!</p>
}

Match.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

