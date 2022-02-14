import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginBottom: "40px",
    }
});

export default useStyle;