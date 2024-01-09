import { Box, Button, Container } from "@mui/material";

//
//
// import styled from "styled-components";

// // create component + inject css
// // syntax : styled.tag`css rule`
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #bf4f74;
// `;

// //  basic
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// // props
// const Button = styled.button`
//   /* ส่ง props มา */
//   background: ${(props) => (props.primary ? "#BF4F74" : "white")};
//   color: ${(props) => (props.primary ? "white" : "#BF4F74")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
//   cursor: pointer;
// `;

// // extain
// const MyFirstButton = styled.button`
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;
// // extain => ถูก design pattern (heigher order component)
// // เอาอันเดิมมาใช้ต่อ แล้วเปลี่ยนหรือเพิ่ม attribute ก็ได้
// // NewComponent = styled(OldComponent)
// const MySecondButton = styled(MyFirstButton)`
//   color: tomato;
//   border-color: tomato;
// `;

// const SplitScreen = styled.div`
//   display: flex;
// `;
// const Child = styled.div`
//   /* ส่ง props เพื่อ custom  */
//   flex: ${(props) => props.flex};
//   text-align: center;
//   border: 2px solid #bf4f74;
// `;

// const MyInput = styled.input`
//   border: 2px solid red;
//   border-radius: 5px;

//   /* & จะหมายถึงตัวนี้ */
//   &:hover {
//     border: 2px solid black;
//   }
// `;

function App() {
  return (
    // <Wrapper>
    //   <Title>Hello</Title>
    //   <Button primary>primary</Button>
    //   {/* มีค่าเหมือนกับข้างล่าง */}
    //   <Button primary={true}>primary</Button>
    //   <Button>Normal</Button>
    //   <MyFirstButton>1</MyFirstButton>
    //   <MySecondButton>2</MySecondButton>

    //   <SplitScreen>
    //     <Child flex={3}>Left</Child>
    //     <Child flex={9}>Right</Child>
    //   </SplitScreen>
    //   <MyInput />
    // </Wrapper>

    // มาจาก import { Button, Box } from "@mui/material";
    // <Box
    //   component="section"
    //   // เหมือน style css
    //   sx={{ p: 2, border: "1px dashed gray", "&:hover": { bgcolor: "red" } }}
    //   width={200}
    //   height={100}
    //   bgcolor={"wheat"}
    //   my={4}
    //   mx={2}
    //   display={"flex"}
    //   gap={4}
    //   alignItems={"center"}
    // >
    //   <Button variant="contained">Hello</Button>
    //   <Button variant="contained">Hello</Button>
    // </Box>

    <Container sx={{ bgcolor: "silver", height: "100vh", maxWidth: "800px" }}>
      <Button variant="contained">BTN</Button>
    </Container>
  );
}

export default App;
