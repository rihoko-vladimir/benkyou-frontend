import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        overflowY: "hidden",
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    resultsContainer: {
        maxHeight: "88%",
        overflowY: "auto",
        overflowX: "clip",
        marginTop: "24px",
    },
    titleAndResults: {
        flexDirection: "column",
        maxHeight: "90%",
        overflowY: "hidden",
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    }
});

export default useStyle;