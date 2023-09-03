import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePosts from "./CreatePosts/CreatePosts";
import SubmitPostBtn from "./CreatePosts/SubmitPostBtn";
import LoginForm from "./LogInForm/LoginForm";
import ShowPosts from "./showPosts";
import HomePage from "./Pages/HomePage";
import SignUpForm from "./SignUpForm/SignUpForm";
import LoginBtn from "./Buttons/ LoginBtn";
import SignupBtn from "./Buttons/SignupBtn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
      <LoginBtn />
      <SignupBtn />
    </div>
  );
}

export default App;
