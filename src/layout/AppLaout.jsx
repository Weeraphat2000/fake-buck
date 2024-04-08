import { Box } from "@mui/material";
import NavBar from "../components/NavBar";

import React from "react";
import { Outlet } from "react-router-dom";

function AppLaout() {
  return (
    <Box>
      <NavBar />

      {/* outlet เป็น UI ของ childern route (nested route)    path ต่างๆที่อยู่ children  */}
      <Outlet />
    </Box>
  );
}

export default AppLaout;
