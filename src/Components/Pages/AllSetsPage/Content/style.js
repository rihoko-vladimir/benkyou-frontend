import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
    },
    searchBarClass: {
        paddingTop: "40px",
        paddingBottom: "40px",
        flex: "5",
    },
    buttonClass: {
        flex: "1",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        columnGap:"12px"
    }

});

export default useStyle;