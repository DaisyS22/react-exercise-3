import { Card, CardContent, Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ItemsList from "./ItemsList";

export const DUMMY_ITEMS = [
  {
    id: 1,
    image: "../../assets/shirt.png",
    name: "Tshirt",
    price: 199,
  },
  {
    id: 2,
    image: "../../assets/jeans.png",
    name: "Shirt",
    price: 299,
  },
  {
    id: 3,
    image: "../../assets/jeans.png",
    name: "Jeans",
    price: 399,
  },
  {
    id: 4,
    image: "../../assets/shirt.png",
    name: "Shoes",
    price: 299,
  },
];

const AvailableItems = () => {
  const itemList = DUMMY_ITEMS.map((item) => (
    <ItemsList
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {itemList}
      </Stack>
    </Container>
  );
};

export default AvailableItems;
