import { Mail, NotificationsActive } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
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
            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={5} color="error">
                <Mail />
              </Badge>
            </IconButton>

            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={10} color="error">
                <NotificationsActive />
              </Badge>
            </IconButton>

            <IconButton>
              <Avatar
                alt="Weeraphat"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </IconButton>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
