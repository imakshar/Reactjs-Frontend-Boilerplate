import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme();

export const theme = createMuiTheme({
    palette: {
        common: {
            black: "rgba(39, 10, 10, 1)",
            white: "rgba(255, 255, 255, 1)"
        },
        background: {
            paper: "#F8F8F8",
            default: "#F8F8F8"
        },
        primary: {
            light: "rgba(102, 62, 142, 1)",
            main: "rgba(56, 20, 96, 1)",
            dark: "rgba(21, 0, 54, 1)",
            contrastText: "#fff"
        },
        secondary: {
            light: "rgba(255, 230, 76, 1)",
            main: "rgba(248, 180, 0, 1)",
            dark: "rgba(192, 133, 0, 1)",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
    },
    status: {
        danger: "orange"
    },
    typography: {
        h3: {
            fontSize: "1.2rem",
            "@media (min-width:600px)": {
                fontSize: "1.5rem"
            },
            [defaultTheme.breakpoints.up("md")]: {
                fontSize: "2.4rem"
            }
        }
    },
    overrides: {
        MuiCard: {
            root: {
                // borderRadius: 10
            }
        }
    }
});
