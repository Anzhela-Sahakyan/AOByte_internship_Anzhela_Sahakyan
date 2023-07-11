import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import posts from "../Data/posts";
import { Box } from "@mui/system";

export default function Posts() {
  const renderedPosts = posts.map((post, i) => (
    <Card key={post.name}>
      <Typography variant="h5">{`${i + 1}. ${post.name}`}</Typography>
      <CardContent>
        <Typography variant="body1">{post.post}</Typography>
        <Box>
          {post.comments.map((comment, index) => (
            <Box>
              <Typography>{comment.user}</Typography>
              <Typography>{`Comment  ${index + 1}.   ${
                comment.comment
              }`}</Typography>
              <Typography>{comment.rate}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  ));

  return renderedPosts;
}
