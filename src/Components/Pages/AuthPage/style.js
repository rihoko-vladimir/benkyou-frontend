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
        animationDelay: "1s",
        animationTimingFunction:"ease-in-out",
        zIndex: 0,
        filter: "brightness(0.9)",
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
            filter: "brightness(0.9)",
        },
        to: {
            filter: "brightness(0.4)",
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
        boxSizing: "border-box",
        width: "630px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: 4,
        borderRadius: "12px",
        padding: "32px",
    },
});

export default useStyle;