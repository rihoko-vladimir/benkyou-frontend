import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    card: {
        position:"relative",
        width: "360px",
        height: "480px",
        borderRadius: "12px",
        borderColor: "#70797B",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    kanjiBackground: {
        position: "absolute",
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
        zIndex: -1,
        overflow: "auto",
        fontSize: "82px",
        overflowX:"hidden",
        overflowY:"hidden",
        filter:"opacity(0.25) blur(16px)"
    },
    cardTitle: {
        padding: "16px",
        display: "flex",
        flexDirection: "column",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: "16px",
    },
    button: {
        marginLeft: "10px",
    }
});
export default useStyle;