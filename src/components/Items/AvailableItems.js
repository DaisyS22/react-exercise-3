import { Container, Stack } from "@mui/material";
import React from "react";
import ItemsList from "./ItemsList";

export const DUMMY_ITEMS = [
  {
    id: 1,
    image: "../../assets/shirt.png",
    name: "Tshirts",
    price: 199,
  },
  {
    id: 2,
    image: "../../assets/shorts.png",
    name: "Shorts",
    price: 299,
  },
  {
    id: 3,
    image: "../../assets/shoes.png",
    name: "Shoes",
    price: 399,
  },
  {
    id: 4,
    image: "../../assets/watch.png",
    name: "Watch",
    price: 299,
  },
];

const AvailableItems = () => {
  const itemList = DUMMY_ITEMS.map((item) => (
    <ItemsList
      key={item.id}
      id={item.id}
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
