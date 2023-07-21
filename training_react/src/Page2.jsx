import React, { useState } from 'react';
import { Typography, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

export function Page2() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 20 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={open}
          onClose={handleDrawerClose}
        >
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="メニュー1" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="メニュー2" />
            </ListItem>
            // 他のメニュー項目をここに追加します
          </List>
        </Drawer>
        <Typography variant="h2" component="h1" gutterBottom>
          Page2
        </Typography>
        <Typography variant="body1" gutterBottom>
          ここにページの内容を書く
        </Typography>
        <Box sx={{ mt: 20 }}>
          <Button variant="contained" startIcon={<AddIcon />}>
            ちんぽ
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
