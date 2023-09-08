import { TextField } from "@mui/material";
import React from "react";

export default function AddComment() {
  return (
    <TextField
      label="Add a comment"
      variant="outlined"
      sx={{ width: "500px", margin: "0 10px" }}
    />
  );
}
