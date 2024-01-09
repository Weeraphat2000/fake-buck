import { createTheme } from "@mui/material";

// setup theme
const theme = createTheme({
  mode: "light",
  palette: {
    primary: { main: "#ffa500" },
    secondary: { main: "#5342fc" },
  },
  otherColor: {
    main: "#aab435",
  },
});

export { theme };
