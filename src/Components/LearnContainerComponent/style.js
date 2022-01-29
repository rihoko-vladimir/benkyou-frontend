import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container: {
        backgroundColor: "rgba(0,0,0,0.12)",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        columnGap: "12px",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        padding: "32px",
        width: "820px",
        height: "90%",
        boxSizing: "border-box",
        borderRadius: "12px",
    }
})

export default useStyle;