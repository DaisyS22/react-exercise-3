import React from "react";
import { Typography, Button, Card, List, ListItem, Box } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

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
    </List>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cartItems}
        <Typography>Total amount</Typography>
        <Typography>{totalAmount}</Typography>
        <Link to="/" underline="none">
          <Button variant="contained" color="primary">
            Close
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Cart;
