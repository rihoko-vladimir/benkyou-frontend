import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        marginTop: "32px",
    },
    rootContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    }
})

export default useStyle;