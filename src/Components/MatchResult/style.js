import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.08)",
        borderTopWidth:"1px",
        borderBottomWidth:"1px",
        borderRightWidth:"1px",
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
        flex: "8",
        rowGap: "8px",
        paddingTop: "12px",
        paddingBottom: "12px",
    },
    readings: {
        display: "flex",
        flexDirection: "row",
        columnGap: "12px",
        flex: "1",
    }

})

export default useStyle;