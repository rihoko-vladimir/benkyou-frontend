import {createTheme} from "@mui/material";

const projectLightTheme = createTheme({
    palette: {
        primary: {
            main: '#006874',
            light: '#FFFFFF',
            dark: '#4FD8EB',
        },
        secondary: {
            main: '#4A6367',
            light: '#FFFFFF',
            dark: '#1C3438',
        },
        background: {
            default: '#FBFDFD',
            paper: '#FBFDFD',
        },
        error: {
            main: '#BA1B1B',
            light: '#FFB4A9',
            dark: '#930006',
        },
        info: {
            main: '#525E7D',
            light: '#BAC6EA',
            dark: '#24304D',
        },
    },
});

export default projectLightTheme;