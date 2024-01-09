import styled from "@emotion/styled";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  backgoundColor: "white",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const PostInput = styled(TextField)`
  &:hover {
    border: "none";
  }
`;

function CreactPost() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      <Button onClick={handleOpen} sx={{ width: "100%" }} variant="contained">
        Creacte Post
      </Button>
      <Modal
        // open={open}
        open={open}
        // onClick
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
            // id="outlined-multiline-flexible"
            label="Post !!!"
            multiline
            rows={5}
            maxRows={4}
          />

          <Button
            onClick={handleClose}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Post
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CreactPost;
