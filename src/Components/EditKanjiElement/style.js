import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        columnGap: "8px",
    },
    kanji: {
        display: "inline-flex",
        fontSize: "2.2em",
        marginTop: "0px",
        marginBottom: "0px",
        userSelect: "none",
        flex: "1",
        alignItems: "center",
        justifyContent: "center"
    },
    readingsContainer: {
        display: "flex",
        flexDirection: "column",
        flex: "7",
        rowGap: "12px",
        paddingTop: "12px",
        paddingBottom: "12px",
    },
    readings: {
        display: "flex",
        flexDirection: "row",
        columnGap: "16px",
        flex: "1",
    }
});


export default useStyle;