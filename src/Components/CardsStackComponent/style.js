import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: "16px",
        columnGap: "28px",
    },
    mainContainer:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        justifyContent: "space-between",
        alignItems:"start",
        rowGap: "24px"
    }
})

export default useStyle;