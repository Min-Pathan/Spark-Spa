import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#245C4F"
        },
        background: {
            default: "#FAF7F2",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#24332D",
            secondary: "#59665F",
        }
    },
     typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default theme;