import React from "react";
import { Typography, Button, Card, List, ListItem, Box } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `PHP ${cartCtx.totalAmount}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <List
      sx={{
        width: 650,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 400,
        "& ul": { padding: 0 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
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
      </Card>
    </List>
  );

  const open = true;

  return (
    <>
      <Modal open={open} onClick={props.onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cartItems}
          <Card>
            <Typography>Total amount</Typography>
            <Typography>{totalAmount}</Typography>
          </Card>
          <Button onClick={props.onClose}>close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
