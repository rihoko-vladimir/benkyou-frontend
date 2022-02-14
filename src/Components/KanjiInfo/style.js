import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    kanjiInfoContainer: {
        display: "flex",
        flexDirection: "row",
        width: "99%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
    },
    kanji: {
        display: "inline-flex",
        fontSize: "2.2em",
        marginTop: "0px",
        marginBottom: "0px",
        userSelect: "none",
        flex: "3",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: "1px",
        borderRightStyle: "solid",
    },
    kanjiReadings: {
        display: "flex",
        flexDirection: "column",
        flex: "8",
        rowGap: "8px",
        paddingTop: "12px",
        paddingBottom: "12px",
    },
    reading: {
        display: "flex",
        flexDirection: "row",
        columnGap: "12px",
        flex: "1",
        paddingLeft: "8px",
        paddingRight: "8px",
    }
})

export default useStyle;