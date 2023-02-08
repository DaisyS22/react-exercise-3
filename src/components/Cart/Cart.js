import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

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

const Cart = (props) => {
  const cartItems = [
    {
      id: 1,
      name: "Tshirt",
      price: 100,
      quantity: 1,
    },
  ].map((item) => <li>{item.name}</li>);

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Modal open={open} onClick={props.onClose}>
        <Box sx={style}>
          {cartItems}
          <div>
            <Typography>Total amount</Typography>
            <Typography>100</Typography>
          </div>
          <Button
            variant="outlined"
            onClick={props.onClose}
            sx={{ marginRight: "10px" }}
          >
            close
          </Button>
          <Button variant="contained">order</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
