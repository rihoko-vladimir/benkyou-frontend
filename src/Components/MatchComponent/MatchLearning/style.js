import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    rootContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    kanjiContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    kanji: {
        display: "inline-flex",
        fontSize: "11em",
        marginTop: "0px",
        marginBottom: "0px",
        userSelect: "none",
    },
    kanjiReadings: {
        display: "flex",
        flexDirection: "row",
        columnGap: "48px",
        justifyContent: "center",
        width: "100%"
    },
    allReadingsAndButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: "56px",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end"
    }
})

export default useStyle;