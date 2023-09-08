import React from "react";
import { Box, Button, TextField } from "@mui/material";
import RenderPostsBtn from "../Buttons/RenderPostsBtn";

export default function CreatePosts({ onAddPost }) {
  const [postText, setPostText] = React.useState("");

  const handleAddPost = () => {
    if (postText.trim() !== "") {
      onAddPost(postText);
      setPostText("");
    }
  };

  return (
    <Box>
      <TextField
        sx={{
          marginTop: "20px",
          width: "300px",
        }}
        id="outlined-basic"
        label="Post something"
        variant="outlined"
        multiline
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <Box>
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={handleAddPost}
        >
          Add post
        </Button>{" "}
      </Box>
    </Box>
  );
}
