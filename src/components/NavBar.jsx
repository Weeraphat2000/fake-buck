import styled from "@emotion/styled";
import { Mail, NotificationsActive } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// custom component emotion
const AppBarContent = styled(Box)`
  display: flex;
  padding: 4px 16px;
  justify-content: space-between;
  align-items: center;
`;

const CustomIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: { display: "block" },
}));

function NavBar() {
  const [anc, setAnc] = useState(null);
  const openMenu = (event) => {
    // set ตัวที่เป็น anc
    console.log(event.currentTarget);
    // ต้องส่งที่อยู่ไปให้มัน (ได้ tag ออกมา   ได้ที่อยู่)
    setAnc(event.currentTarget);
  };
  const closeMenu = (event) => {
    setAnc(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBarContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            py: 1,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ flexGrow: 1 }}>
            fake bug
          </Typography>

          <Stack direction="row" gap={2}>
            <CustomIcon sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={5} color="error">
                <Mail />
              </Badge>
            </CustomIcon>

            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={10} color="error">
                <NotificationsActive />
              </Badge>
            </IconButton>

            {/* onClick เพื่อส่ง event(event.currentTarget จะได้ที่อยู่) ไป setUsestate */}
            <IconButton onClick={openMenu}>
              <Avatar
                alt="Weeraphat"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </IconButton>
          </Stack>

          <Menu
            //   บอกตำแหน่งว่า menu อยู่ไหน (ที่นี่ anc)
            anchorEl={anc}
            // คล้ายๆ onClick (เปิด)
            open={!!anc}
            // คลิกที่อื่นจะปิด
            onClose={closeMenu}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBarContent>
      </AppBar>
    </Box>
  );
}

export default NavBar;
