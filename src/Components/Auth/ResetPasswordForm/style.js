import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    fields:{
        display:"flex",
        flexDirection:"column",
        rowGap:"16px",
        marginTop: "24px",
    },
    button:{
        display:"flex",
        flexDirection:"column",
        alignItems:"end",
        marginTop:"24px"
    }
})

export default useStyle;