import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    reading: {
        display: "inline-block",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
        backgroundColor: "rgba(130,196,203,0.2)",
        borderRadius: "12px",
        userSelect: "none",
    },
});

export default useStyle;