import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { Home } from "./Home.jsx";
import { Page1 } from "./Page1.jsx";
import { Page2 } from "./Page2.jsx";
import { Page3 } from "./Page3.jsx";
import { Chinpo } from "./chinpo.jsx";
import { MyLineChart as Chart } from "./MyLineChart.jsx";
import { Unko } from "./boko.jsx";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          App Name
        </Typography>
        <MuiLink color="inherit" underline="none" href="/">
          Home
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/page1">
          Page1
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/page2">
          Page2
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/page3">
          Page3
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/chinpo">
          chinpo
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/chart">
          chart
        </MuiLink>
        <MuiLink color="inherit" underline="none" href="/unko">
          unko
        </MuiLink>
      </Toolbar>
    </AppBar>
  </Box>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/page1"
          element={
            <>
              <Header />
              <Page1 />
            </>
          }
        />
        <Route
          path="/page2"
          element={
            <>
              <Header />
              <Page2 />
            </>
          }
        />
        <Route
          path="/page3"
          element={
            <>
              <Header />
              <Page3 />
            </>
          }
        />
        <Route path="/chinpo" element={<Chinpo />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/unko" element={<Unko />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
