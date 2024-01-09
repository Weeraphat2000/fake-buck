import styled from "@emotion/styled";
import { Home, ModeNight, People, Store } from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  //   backgroundColor: "red",
  flex: 1,
  padding: "10px 20px",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
function SideBar() {
  return (
    // <Box sx={{ bgcolor: "red", flex: 1, display: { xs: "none", md: "block" } }}>
    //   SideBar
    // </Box>
    <Wrapper>
      <nav>
        <List>
          {/* home */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* icon home */}
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home Page"></ListItemText>
            </ListItemButton>
          </ListItem>

          {/* shop */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* icon shop */}
                <Store />
              </ListItemIcon>
              <ListItemText primary="Shop"></ListItemText>
            </ListItemButton>
          </ListItem>

          {/* friend */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* icon people */}
                <People />
              </ListItemIcon>
              <ListItemText primary="Friend"></ListItemText>
            </ListItemButton>
          </ListItem>

          {/* mode */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* icon  */}
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Wrapper>
  );
}

export default SideBar;
