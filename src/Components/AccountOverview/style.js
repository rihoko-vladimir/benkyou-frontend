import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    accountInfoContainer: {
        width: "300px",
        display: "flex",
        flexDirection: "column",
        columnGap: "24px",
        backgroundColor: "/*rgba(25, 118, 210, 0.07)*/white",
        borderRadius: "16px",
        borderWidth: "1px",
        borderColor: "#81898a",
        boxSizing: "border-box",
        borderStyle: "solid",
        padding: "32px",
        justifyContent: "space-between",
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
    },
    avatarClass: {
        width: "128px",
        height: "128px",
    },
})


export default useStyle;