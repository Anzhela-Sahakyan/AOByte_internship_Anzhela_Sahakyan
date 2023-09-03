import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./LogInForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

import { Box } from "@mui/material";

import HomePage from "./Pages/Home.Page";
import Header from "./Header/Header";

function App() {
  return (
    <Box className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
    </Box>
  );
}

export default App;
