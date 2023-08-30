import "./App.css";
import CreatePosts from "./CreatePosts/CreatePosts";
import SubmitPostBtn from "./CreatePosts/SubmitPostBtn";
import LoginForm from "./LogInForm/LoginForm";
import SignInForm from "./SignInForm/SignIn";
import ShowPosts from "./showPosts";

function App() {
  return (
    <div className="App">
      <CreatePosts />
      <SubmitPostBtn />
      <ShowPosts />
      <SignInForm />
      <LoginForm />
    </div>
  );
}

export default App;
