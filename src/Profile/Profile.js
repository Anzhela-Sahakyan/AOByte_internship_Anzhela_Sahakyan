import { Box, Button, TextField, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box>
      <Box>
        <TextField
          label="Add your name"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <Button
          sx={{ margin: "20px", height: "55px", width: "110px" }}
          variant="contained"
          color="success"
        >
          Submit
        </Button>
        <Box>
          <TextField
            label="Add a post"
            variant="outlined"
            sx={{ margin: "20px" }}
          />
          <Button
            sx={{ margin: "20px", height: "55px", width: "110px" }}
            variant="contained"
            color="success"
          >
            Post
          </Button>
        </Box>
      </Box>
      <Box>
        <Button>Show my posts</Button>
      </Box>
    </Box>
  );
}
