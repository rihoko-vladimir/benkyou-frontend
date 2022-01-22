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
});

export default useStyle;