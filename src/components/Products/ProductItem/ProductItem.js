import React, { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../../store/cart-context";

import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductItem = (props) => {
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

  const onIncreaseItem = () => {};
  const onDecreaseItem = () => {};

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
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

      {/* <Button onClick={onDecreaseItem} sx={{ width: "50%" }}>
        -
      </Button>
      {props.amount}
      <Button onClick={onIncreaseItem} sx={{ width: "50%" }}>
        +
      </Button> */}

      <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>
    </Card>
  );
};

export default ProductItem;
