import { Assessment, ShoppingCartRounded } from "@mui/icons-material";
import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import image from "../../assets/shirt.png";

const ItemsList = (props) => {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <h3>{props.name}</h3>

        <div>PHP {props.price}</div>
      </CardContent>
      <div></div>
    </Card>
  );
};

export default ItemsList;
