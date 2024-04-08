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
import { Link } from "react-router-dom";

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
      {/* อาจจะต้องมี relative ให้มันก่อน(position) */}
      <Box sx={{ position: "fixed" }}>
        <nav>
          <List>
            {/* Link กดแล้วไปเลย */}
            <Link to="/">
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
            </Link>

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

            {/*
             */}
            {/*  */}
            {/* กดแล้วไปเลย     ใน router set dynamic path เอาไว้  และใช้ useParams มาใช้ด้วย */}
            <Link to="/friend/79">
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
            </Link>

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
      </Box>
    </Wrapper>
  );
}

export default SideBar;
