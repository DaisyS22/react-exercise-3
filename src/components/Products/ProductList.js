import {
  Card,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductItemForm from "./ProductItem/ProductItemForm";
import classes from "./ProductList.module.css";

// export const DUMMY_ITEMS = [
//   {
//     id: 1,
//     image: "../../assets/shirt.png",
//     name: "Tshirts",
//     price: 199,
//   },
//   {
//     id: 2,
//     image: "../../assets/shorts.png",
//     name: "Shorts",
//     price: 299,
//   },
//   {
//     id: 3,
//     image: "../../assets/shoes.png",
//     name: "Shoes",
//     price: 399,
//   },
//   {
//     id: 4,
//     image: "../../assets/watch.png",
//     name: "Watch",
//     price: 299,
//   },
// ];

const ProductList = ({ products }) => {
  // const itemList = DUMMY_ITEMS.map((item) => (
  //   <ProductItem
  //     key={item.id}
  //     id={item.id}
  //     image={item.image}
  //     name={item.name}
  //     price={item.price}
  //   />
  // ));

  // const [items, setItems] = useState(DUMMY_ITEMS);
  // const addItemHandler = (item) => {
  //   setItems((prevItems) => {
  //     return [item, ...prevItems];
  //   });
  //   console.log(item);
  // };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* <NewItem onAddItem={addItemHandler}>{items.item}</NewItem> */}
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 5 }}
      >
        {itemList}
      </Stack> */}
      <Card>
        <List>
          {products.map((product) => (
            <ListItem key={product.id} className={classes.item}>
              <Link to={product.id}>
                <img src={product.image} alt={product.name} />
                <li className={classes.content}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Typography>{product.description}</Typography>
                  {/* <ProductItemForm
                  onAddToCart={addToCartHandler}
                ></ProductItemForm> */}
                </li>
              </Link>
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
};

export default ProductList;
