import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container: {
        background: "rgba(0,0,0,0.05)",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "16px",
        paddingRight: "16px",
        borderRadius: "12px",
        display: "flex",
        flex: "1",
        flexWrap: "nowrap",
        columnGap: "8px",
        alignItems: "start",
        userSelect: "none",
    },
    readingsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: "8px",
        rowGap: "8px",
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignSelf: "stretch",
    }
})

export default useStyle;