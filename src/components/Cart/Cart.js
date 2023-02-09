import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

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
  const cartCtx = useContext(CartContext);

  const totalAmount = `PHP ${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Modal open={open} onClick={props.onClose}>
        <Box sx={style}>
          {cartItems}
          <Card>
            <Typography>Total amount</Typography>
            <Typography>{totalAmount}</Typography>
          </Card>
          <Button onClick={props.onClose}>close</Button>
          {hasItems && <Button>order</Button>}
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
