import RenderPostsBtn from "./Buttons/RenderBtn";
import { Box } from "@mui/material";
import Posts from "./Posts/Posts";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import CalculateMedian from "./helpers/CalculateMedian";
import * as data from "../src/db.json";

export default function ShowPosts() {
  const [showPosts, setShowPosts] = useState(false);
  const [btnValue, setBtnValue] = useState("Show posts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("../src/db.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error  fetching data", error));
  }, []);

  function handleClick() {
    setShowPosts((state) => !state);
    if (showPosts) {
      setBtnValue("Show Posts");
    } else {
      setBtnValue("Hide Posts");
    }
  }

  function sortByMedian() {
    const sortedPosts = [...posts].sort((post1, post2) => {
      const median1 = CalculateMedian(
        post1.comments.map((comment) => comment.rate)
      );
      const median2 = CalculateMedian(
        post2.comments.map((comment) => comment.rate)
      );
      return median1 - median2;
    });

    setPosts(sortedPosts);
  }

  return (
    <div>
      <Box>
        <RenderPostsBtn onClick={handleClick} value={btnValue} />
        <Box>
          <SortIcon
            onClick={sortByMedian}
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
