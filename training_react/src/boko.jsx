import React from "react";
import {
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Switch,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import useDarkMode from "./noko.jsx"; // useDarkMode hookのインポート

export function Unko() {
  const [theme, toggleDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Switch
            checked={theme.palette.mode === "dark"}
            onChange={toggleDarkMode}
          />
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" component="h1" gutterBottom>
            Page2
          </Typography>
          <Typography variant="body1" gutterBottom>
            ここにページの内容を書く
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              ちんぽ
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
