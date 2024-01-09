import styled from "@emotion/styled";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Post from "./Post";
import CreactPost from "./CreactPost";

const Wrapper = styled(Box)(({ theme }) => ({
  //   background: "green",
  flex: 2,
  //   gap:
}));
function Feed() {
  return (
    <Wrapper>
      <Stack sx={{ gap: 4, pt: 2 }}>
        <CreactPost />
        <Post />
        <Post></Post>
        <Post />
      </Stack>
    </Wrapper>
  );
}

export default Feed;
