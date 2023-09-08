import Button from "@mui/material/Button";

export default function RenderPostsBtn({ value, onClick }) {
  return (
    <Button sx={{ margin: " 20px 20px" }} variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}
