import "./App.css";
import CreatePosts from "./CreatePosts/CreatePosts";
import SubmitPostBtn from "./CreatePosts/SubmitPostBtn";
import ShowPosts from "./showPosts";

function App() {
  return (
    <div className="App">
      <CreatePosts />
      <SubmitPostBtn />
      <ShowPosts />
    </div>
  );
}

export default App;
