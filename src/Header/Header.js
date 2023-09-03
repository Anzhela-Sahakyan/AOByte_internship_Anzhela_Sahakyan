import { Typography, Box } from "@mui/material";
import LoginBtn from "../Buttons/ LoginBtn";
import SignupBtn from "../Buttons/SignupBtn";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#d7e1ee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h3" sx={{ display: "flex", padding: "15px" }}>
        Posts App
      </Typography>
      <Box sx={{ padding: "15px" }}>
        <LoginBtn />
        <SignupBtn />
      </Box>
    </Box>
  );
}
