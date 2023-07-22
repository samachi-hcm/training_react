import { Typography, Container, Box } from "@mui/material";

export function Page3() {
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
      <Box
        sx={{
          mb: 4, // margin-bottom: 4
        }}
      >
        <Typography variant="h2" component="h1">
          Page3
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Welcome to Page 3! Here is some content for this page.
        </Typography>
      </Box>
    </Container>
  );
}
