import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@mui/material';
import { Home } from './Home.jsx';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App Name
        </Typography>
        <MuiLink color="inherit" underline="none" href="/">Home</MuiLink>
      </Toolbar>
    </AppBar>
  </Box>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
