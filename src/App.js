import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./LogInForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

import { Box } from "@mui/material";

import HomePage from "./Pages/Home.Page";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

function App() {
  return (
    <Box className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Box>
  );
}

export default App;
