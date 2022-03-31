import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    container:{
        display: "flex",
        flexDirection:"column",
        rowGap:"12px"
    },
    button:{
        alignSelf:"end",
        justifySelf:"end",
        marginTop:"32px"
    }
})

export default useStyle;