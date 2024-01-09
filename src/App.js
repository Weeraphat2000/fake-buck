import { Box, Button, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

function App() {
  return (
    <Box>
      <NavBar />
      <SideBar />
      <Feed />
      <RightBar />
    </Box>
  );
}

export default App;
