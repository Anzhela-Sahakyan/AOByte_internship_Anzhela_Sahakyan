import { Button } from "@mui/material";
import React from "react";

export default function AddCommentBtn() {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{ margin: "0 10px", width: "100px", height: "50px" }}
    >
      Add
    </Button>
  );
}
