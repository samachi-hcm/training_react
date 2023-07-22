import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";

export function Page1() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          margin: 4,
        }}
      >
        Page1
      </Typography>
      <Box>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ ml: 2 }} // margin left 2
        >
          Secondary Button
        </Button>
      </Box>
    </Container>
  );
}
