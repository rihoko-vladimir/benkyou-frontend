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
        columnGap: "8px",
        alignItems: "center",
        userSelect: "none"
    }
})

export default useStyle;