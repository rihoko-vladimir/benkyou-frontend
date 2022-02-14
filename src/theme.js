import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0"
        },
        secondary: {
            main: "#9c27b0",
            light: "#ba68c8",
            dark: "#7b1fa2",
        },
    },
});

export default theme;