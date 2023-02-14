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
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  // const cartCtx = useContext(CartContext);

  // const addToCartHandler = (amount) => {
  //   cartCtx.addItem({
  //     id: props.id,
  //     name: props.name,
  //     price: props.price,
  //     image: props.image,
  //     amount: amount,
  //   });
  // };
  function startDeleteHandler() {
    // ...
  }
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
            image={product.image}
            alt={product.title}
          ></CardMedia>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="h6">PHP {product.price}</Typography>
          <Typography>{product.description}</Typography>
          <menu>
            <a href="edit">Edit</a>
            <button onClick={startDeleteHandler}>Delete</button>
          </menu>
        </CardContent>
      </CardActionArea>

      {/* <Button onClick={onDecreaseItem} sx={{ width: "50%" }}>
        -
      </Button>
      {props.amount}
      <Button onClick={onIncreaseItem} sx={{ width: "50%" }}>
        +
      </Button> */}

      {/* <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm> */}
    </Card>
  );
};

export default ProductItem;
