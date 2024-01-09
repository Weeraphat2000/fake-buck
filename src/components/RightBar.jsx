import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "red",
  flex: 1,
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

function RightBar() {
  return <Wrapper>RightBar</Wrapper>;
}

export default RightBar;
