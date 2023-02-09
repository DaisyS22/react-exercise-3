import React, { useContext } from "react";
import ItemForm from "./ItemForm";
import CartContext from "../../store/cart-context";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemsList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      amount: amount,
    });
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.name}
          >
            {/* <img src={props.image} /> */}
          </CardMedia>
          <Typography variant="h6">{props.name}</Typography>
          <Typography>PHP {props.price}</Typography>
        </CardContent>
      </CardActionArea>
      <ItemForm onAddToCart={addToCartHandler}></ItemForm>
    </Card>
  );
};

export default ItemsList;
