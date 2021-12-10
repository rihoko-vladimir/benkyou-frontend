const {makeStyles} = require("@mui/styles");
const useStyles = makeStyles({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "45px",
        width: "100%",
    },
    accountInfoContainer: {
        marginTop: "64px",
        display:"flex",
        flexDirection:"row",
        columnGap:"24px",
        alignItems:"center",
    },
    avatarClass: {
        width: "128px",
        height: "128px",
    }
});

export default useStyles;