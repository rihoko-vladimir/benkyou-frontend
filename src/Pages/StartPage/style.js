import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        backgroundImage: "url(https://wallpaperaccess.com/full/19069.jpg)",
        filter: "brightness(0.9)",
        animationName: "$brightness_anim",
        animationDuration: "2s",
        animationFillMode: "forwards",
        animationDelay: "1s",
        animationTimingFunction: "ease-in-out",
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
        boxSizing: "border-box",
        width: "630px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: 4,
        borderRadius: "12px",
        padding: "32px",
        rowGap: "24px",
    },
});

export default useStyle;