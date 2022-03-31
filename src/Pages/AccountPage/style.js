const {makeStyles} = require("@mui/styles");
const useStyles = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
    },
    nameAndSurname: {
        display: "flex",
        flexDirection: "row",
        marginTop: "32px",
        columnGap: "16px",
    },
    dividedTextFields: {
        display: "flex",
        flexDirection: "row",
        columnGap: "16px",
    },
    accountMainContainer: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        marginTop: "45px",
        columnGap: "12px",
    },
    mainAccountContainer: {
        backgroundColor: "/*rgba(25, 118, 210, 0.07)*/white",
        borderColor: "#81898a",
        borderStyle: "solid",
        borderWidth: "1px",
        flex: "1",
        borderRadius: "16px",
        padding: "32px",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "end",
        columnGap: "12px"
    },
    tabs:{
        marginTop:"12px",
    }
});

export default useStyles;