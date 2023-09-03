import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = (email) => {
    const emailValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidPattern.test(email);
  };

  const handleSignIn = (e) => {
    if (!validEmail(email)) {
      e.preventDefault();
      console.log("email not valid");
      return;
    }
    console.log("signed in");
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Avatar style={{ backgroundColor: "#f50057", margin: "10px" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          style={{ width: "100%", marginTop: "10px" }}
          onSubmit={handleSignIn}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "20px 0" }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
