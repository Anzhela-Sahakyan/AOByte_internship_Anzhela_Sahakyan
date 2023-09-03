import Button from "@mui/material/Button";

export default function RenderPostsBtn({ onClick, value }) {
  return (
    <Button sx={{ margin: " 20px 0px" }} variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}
