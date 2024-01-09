import { Box, Button, Container, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

function App() {
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

export default App;
