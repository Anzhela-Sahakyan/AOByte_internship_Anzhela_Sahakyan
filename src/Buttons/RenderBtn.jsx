import Button from "@mui/material/Button";
import Styles from "./RenderBtn.module.css";

export default function RenderPostsBtn({ onClick, value }) {
  return (
    <Button className={Styles.btn} variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}
