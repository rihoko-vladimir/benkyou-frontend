import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    card: {
        maxWidth: "360px",
        maxHeight: "480px",
        padding: "16px",
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
        },
        boxSizing:"border-box",
    },
    cardTitle: {
        display: "flex",
        flexDirection: "column",
    },
    actionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    button: {
        marginLeft: "10px",
    },
    displayedKanji:{
        overflowX:"hidden",
        overflowY:"hidden",
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
    },
    lowerCardContent:{
        rowGap: "16px",
        display:"flex",
        flexDirection:"column",
    },
    kanjiList:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: "300px",
        overflowY: "scroll",
    }
});
export default useStyle;