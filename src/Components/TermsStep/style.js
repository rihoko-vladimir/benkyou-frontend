import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    buttons:{
        marginTop: "24px",
        display:"flex",
        justifyContent:"space-between"
    },
    registrationForm: {
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
        marginTop: "24px",
    },
    checkboxAndAgreement:{
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
        marginTop: "24px",
        alignItems:"start"
    },
    agreement:{
        overflowY:"scroll",
        height:"350px",
        textAlign:"justify",
        overflowX:"auto",
        backgroundColor:"rgba(0,0,0,0.04)",
    }
});

export default useStyle;