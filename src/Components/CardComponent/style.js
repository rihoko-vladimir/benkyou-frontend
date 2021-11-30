import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    card: {
        position:"relative",
        width: "360px",
        height: "480px",
        borderRadius: "12px",
        borderColor: "#81898a",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        "&:hover":{
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            cursor: "hover",
        }
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
        filter:"opacity(0.4) blur(24px)"
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