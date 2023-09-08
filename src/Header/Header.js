import { Typography, Box } from "@mui/material";
import LoginBtn from "../Buttons/ LoginBtn";
import SignupBtn from "../Buttons/SignupBtn";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#d7e1ee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none", outline: "none" }}>
        <Typography variant="h3" sx={{ display: "flex", padding: "15px" }}>
          Posts App
        </Typography>
      </Link>
      <Box sx={{ padding: "15px" }}>
        <Link to={"/login"}>
          <LoginBtn />
        </Link>
        <Link to={"/signUp"}>
          <SignupBtn />
        </Link>
      </Box>
    </Box>
  );
}
