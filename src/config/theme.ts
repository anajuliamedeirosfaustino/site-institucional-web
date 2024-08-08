import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00394D",
            light: "#1565C0",
            dark: "#00394D",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#7D7D7D",
            light: "#DADADA",
            dark: "#4A4A4A",
            contrastText: "#FCFCFC",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                    textTransform: "none"
                },
            },
        },
    },
});

export default theme;