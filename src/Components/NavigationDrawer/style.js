import {makeStyles} from "@mui/styles";

let drawerWidth = 270;

const useDrawerStyles = makeStyles({
    drawerClass: {
        width: drawerWidth,
    },
    paper: {
        backgroundColor: "#eef6f6",
        width: drawerWidth,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
    },
    itemContainer: {
        margin: '8px',
    },
    accountHeader: {
        backgroundColor: "transparent"
    },
    accountMenu: {
        backgroundColor: "rgba(25, 118, 210, 0.08)",
    },
    accountItems:{
        paddingLeft: `${16+12}px`
    },
    focusVisible:{

    }

});

export default useDrawerStyles;