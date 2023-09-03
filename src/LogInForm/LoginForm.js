import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^.{6,}$/;
    return passwordPattern.test(password);
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      console.log("email or password not valid");

      return;
    }

    console.log("loged in");

    navigate("/profile");
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
        <Avatar style={{ backgroundColor: "#43a047", margin: "10px" }}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form
          style={{ width: "100%", marginTop: "10px" }}
          onSubmit={handleLogin}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
