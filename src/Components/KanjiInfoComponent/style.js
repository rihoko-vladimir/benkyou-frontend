import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    kanjiInfoContainer: {
        display: "flex",
        flexDirection: "row",
    },
    kanji: {
        display: "inline-block",
        fontSize: "32px",
        textAlign: "center",
        padding: "12px",
        borderWidth: "1px",
        borderColor: "black",
        borderStyle: "solid",
    },
    kanjiReadings: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    reading: {
        height: "50%",
        display: "inline-block",
        textAlign: "left",
        fontSize: "12px",
        paddingLeft: "12px",
        paddingRight: "12px",
        marginTop: "0px",
        marginBottom: "0px",
    }
})

export default useStyle;