import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function MainSection({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Message board
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="button" sx={{ mx: 1 }}>
              Channels
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {children}
    </ThemeProvider>
  );
}
