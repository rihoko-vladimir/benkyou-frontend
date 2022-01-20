import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(https://images7.alphacoders.com/888/thumb-1920-888540.jpg)",
        animationName: "$brightness_anim",
        animationDuration: "3s",
        animationFillMode: "forwards",
        zIndex: 0,
    },
    blur: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(20px)",
        zIndex: 1,
    },
    "@keyframes brightness_anim": {
        from: {
            filter: "brightness(1)",
        },
        to: {
            filter: "brightness(0.6)",
        }
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3,
    },
    card: {
        width: "600px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: 4,
        borderRadius: "12px",
    }
});

export default useStyle;