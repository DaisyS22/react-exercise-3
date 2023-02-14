import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <ul className={classes.list}>
        {products.map((product) => (
          <li key={product.id} className={classes.item}>
            <Link to={product.id}>
              <img src={product.image} alt={product.title} />
              <div className={classes.content}>
                <h2>{product.title}</h2>
                <h1>{product.description}</h1>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProductList;
