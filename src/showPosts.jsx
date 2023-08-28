import RenderPostsBtn from "./Buttons/RenderBtn";
import { Box } from "@mui/material";
import Posts from "./Posts/Posts";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
    <div>
      <Box>
        <RenderPostsBtn onClick={handleCLick} value={btnValue} />
        <Box>
          <SortIcon
            sx={{
              color: "Darkblue",
              border: "0.5px solid grey",
              borderRadius: "10px",
              fontSize: "35px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <FilterAltIcon
            sx={{
              color: "Darkblue",
              border: "0.5px solid grey",
              borderRadius: "10px",
              fontSize: "35px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      {showPosts && <Posts />}
    </div>
  );
}
