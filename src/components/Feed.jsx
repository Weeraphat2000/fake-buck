import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Wrapper = styled(Box)(({ theme }) => ({
  //   background: "green",
  flex: 2,
}));
function Feed() {
  return (
    <Wrapper>
      <Post></Post>
    </Wrapper>
  );
}

export default Feed;
