import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    kanjiInfoContainer: {
        display: "flex",
        flexDirection: "row",
    },
    kanji: {
        boxSizing: "border-box",
        display: "flex",
        fontSize: "32px",
        padding: "12px",
        borderWidth: "1px",
        borderColor: "black",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
    },
    kanjiReadings: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    noMargin: {
        margin: "0px",
    },
    reading: {
        boxSizing: "border-box",
        display: "block",
        textAlign: "left",
        verticalAlign: "middle",
        fontSize: "12px",
        paddingLeft: "12px",
        paddingRight: "12px",
        marginTop: "0px",
        marginBottom: "0px",
        borderStyle: "solid",
        borderColor: "black",
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderRightWidth: "1px",
        borderLeftWidth: "0px",
        width:"250px"
    }
})

export default useStyle;