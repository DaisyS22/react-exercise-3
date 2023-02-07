import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Items from "./Items";
import ItemsList from "./ItemsList";

const DUMMY_ITEMS = [
  {
    id: 1,
    image: "../../assets/shirt.png",
    name: "Tshirt",
    price: 199,
  },
  {
    id: 2,
    name: "Shirt",
    price: 299,
  },
  {
    id: 3,
    name: "Jeans",
    price: 399,
  },
  {
    id: 4,
    name: "Shoes",
    price: 299,
  },
];

const AvailableItems = () => {
  const itemList = DUMMY_ITEMS.map((item) => (
    <ItemsList
      key={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
    />
  ));

  return (
    <Box width="600px">
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>{itemList}</CardContent>
      </Card>
    </Box>
  );
};

export default AvailableItems;
