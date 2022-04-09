import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "32px",
        paddingBottom: "32px"
    }
})

export default useStyle;