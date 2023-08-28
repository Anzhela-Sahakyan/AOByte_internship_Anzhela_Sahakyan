import React from "react";
import { TextField } from "@mui/material";

export default function CreatePosts() {
  return (
    <TextField
      sx={{
        marginTop: "20px",
        width: "300px",
      }}
      id="outlined-basic"
      label="Post something"
      variant="outlined"
      multiline
    />
  );
}
