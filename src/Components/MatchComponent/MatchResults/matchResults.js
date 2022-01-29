import PropTypes from "prop-types";

const MatchResults = (props) => {

}

MatchResults.propTypes = {
    kanjiList: PropTypes.arrayOf(PropTypes.exact({
        kanji: PropTypes.string.isRequired,
        kunyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onyoumi: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired).isRequired
}

export default MatchResults;