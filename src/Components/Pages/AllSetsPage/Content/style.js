import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
    },
    searchBarClass: {
        flex: "15"
    },
    buttonClass: {
        flex: "1"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingTop: "40px",
        paddingBottom: "40px",
        columnGap: "16px",
    }

});

export default useStyle;