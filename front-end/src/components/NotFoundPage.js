// NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for might be unavailable or does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
