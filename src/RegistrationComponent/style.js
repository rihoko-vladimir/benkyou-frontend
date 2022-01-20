import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    registrationForm: {
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
        marginTop: "24px",
    },
    stepper:{
        marginTop:"24px",
        marginBottom:"24px",
    },
    buttons:{
        marginTop: "24px",
        display:"flex",
        justifyContent:"space-between"
    }
});

export default useStyle;