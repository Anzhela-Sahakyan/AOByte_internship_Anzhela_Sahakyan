import RenderPostsBtn from "./Buttons/RenderBtn";
import Posts from "./PostsRender/Posts";
import { useState } from "react";

export default function ShowPosts() {
  const [showPosts, setShowPosts] = useState(false);
  const [btnValue, setBtnValue] = useState("Show posts");

  function handleCLick() {
    setShowPosts((state) => !state);
    if (showPosts) {
      setBtnValue("Show Posts");
    } else {
      setBtnValue("Hide Posts");
    }
  }

  return (
    <>
      <RenderPostsBtn onClick={handleCLick} value={btnValue} />
      {showPosts && <Posts />}
    </>
  );
}
