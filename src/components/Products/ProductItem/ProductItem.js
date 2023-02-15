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
  CardActions,
  Grid,
} from "@mui/material";
import { Link, useSubmit } from "react-router-dom";

const ProductItem = ({ product }) => {
  const submit = useSubmit();
  // const cartCtx = useContext(CartContext);

  // const addToCartHandler = (amount) => {
  //   cartCtx.addItem({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //     amount: amount,
  //   });
  // };
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  const onIncreaseItem = () => {};
  const onDecreaseItem = () => {};

  return (
    // <Card
    //   sx={{
    //     height: "100%",
    //   }}
    // >
    //   <CardActionArea>
    //     <CardContent>
    //       <CardMedia
    //         component="img"
    //         height="140"
    //         image={product.image}
    //         alt={product.name}
    //       ></CardMedia>
    //       <Typography variant="h6">{product.name}</Typography>
    //       <Typography variant="h6">PHP {product.price}</Typography>
    //       <Typography>{product.description}</Typography>
    //       <menu>
    //         <Link to="edit">Edit</Link>
    //         <Button onClick={startDeleteHandler}>Delete</Button>
    //       </menu>
    //     </CardContent>
    //   </CardActionArea>

    //   <Button onClick={onDecreaseItem} sx={{ width: "50%" }}>
    //     -
    //   </Button>
    //   {product.amount}
    //   <Button onClick={onIncreaseItem} sx={{ width: "50%" }}>
    //     +
    //   </Button>

    //   <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>
    // </Card>
    <Grid container justifyContent="center" paddingTop="50px">
      <Card sx={{ maxWidth: 600, height: 600 }}>
        <CardMedia
          sx={{ width: 400, height: 400, margin: "auto" }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            PHP {product.price}
          </Typography>
          <Typography> {product.description}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to="edit">
            <Button size="large">Edit</Button>
          </Link>
          <Button onClick={startDeleteHandler} size="large">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
