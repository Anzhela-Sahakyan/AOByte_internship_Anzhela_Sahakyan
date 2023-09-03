import { Card, CardContent, Stack, Typography } from "@mui/material";

import data from "../../src/db.json";
import { Box } from "@mui/system";
import EditBtn from "../Buttons/EditBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import { Pagination } from "@mui/material";
import AddComment from "../Add comments/AddComment";
import AddCommentRate from "../Add comments/AddCommentRate";
import AddCommentBtn from "../Add comments/AddCommentBtn";
import { useState } from "react";

export default function Posts() {
  const posts = data.posts;
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const displayPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  const handlePageChange = (even, newPage) => {
    setCurrentPage(newPage);
  };

  const CalculatePostNumber = (index) => {
    return (currentPage - 1) * postsPerPage + index + 1;
  };
  const renderedPosts = displayPosts().map((post, index) => (
    <Card
      key={post.name}
      sx={{
        border: "2px solid grey",
        borderRadius: "5px",
        margin: "20px",
        padding: "10px",
        maxWidth: "70%",
        minWidth: "1000px",
        padding: "15px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          border: "0.5px solid lightgrey",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >{`${CalculatePostNumber(index)}. ${post.name}`}</Typography>
      <CardContent>
        <Typography variant="body1" sx={{ fontSize: "25px", margin: "25px 0" }}>
          {post.post}
        </Typography>
        <Box>
          {post.comments.map((comment, index) => (
            <Box
              key={comment.comment}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", margin: "5px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "darkGreen",
                    marginRight: "10px",
                  }}
                >
                  {index + 1}. {comment.user}:
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  {comment.comment}
                </Typography>

                <Typography
                  sx={{
                    color: "#EC421D",
                    margin: "0 20px",
                  }}
                >{`Rate: ${comment.rate}`}</Typography>
              </Box>
            </Box>
          ))}
          <EditBtn />
          <DeleteBtn />
        </Box>
        <Box>
          <AddComment />
          <AddCommentRate />
          <AddCommentBtn />
        </Box>
      </CardContent>
    </Card>
  ));
  const totalPageCount = Math.ceil(posts.length / postsPerPage);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>{renderedPosts}</Stack>
      <Pagination
        count={totalPageCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
}
