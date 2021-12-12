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
    accountInfoContainer: {
        width: "300px",
        display: "flex",
        flexDirection: "column",
        columnGap: "24px",
        backgroundColor: "rgba(25, 118, 210, 0.07)",
        borderRadius: "16px",
        boxSizing: "border-box",
        padding: "32px",
        justifyContent: "space-between",
    },
    nameAndSurname: {
        display: "flex",
        flexDirection: "row",
        marginTop: "48px",
        columnGap: "16px",
    },
    avatarClass: {
        width: "128px",
        height: "128px",
    },
    accountMainContainer: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        marginTop: "45px",
        columnGap: "12px",
    },
    mainAccountContainer: {
        backgroundColor: "rgba(25, 118, 210, 0.07)",
        flex: "1",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    mainAccountContent: {
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
    },
    editButton: {
        alignSelf: "end",
    },
    topInfo: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        rowGap: "28px",
        marginTop: "48px",
    },
    bottomStatistics: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    }
});

export default useStyles;