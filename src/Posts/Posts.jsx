import { Card, CardContent, Stack, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import posts from "../Data/posts";
import { Box } from "@mui/system";
import EditBtn from "../Buttons/EditBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import { Pagination } from "../Pagination/Pagination";

export default function Posts() {
  const renderedPosts = posts.map((post, i) => (
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
      >{`${i + 1}. ${post.name}`}</Typography>
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
      </CardContent>
    </Card>
  ));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>{renderedPosts}</Stack>
      <Pagination elementCount={25} />
    </Box>
  );
}
