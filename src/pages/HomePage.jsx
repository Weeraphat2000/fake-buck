import { Box, Button, Container, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  //   const navigator = useNavigate();
  return (
    <Box>
      <NavBar />
      {/* Stack เหมือน flex */}
      <Stack direction="row" gap={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default HomePage;
