import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const CartItem = (props) => {
  const price = `PHP ${props.price}`;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ maxWidth: 200, height: "auto" }}
        image={props.image}
        alt={props.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {price}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button onClick={props.onRemove}>−</Button>
          <Typography>{props.amount}</Typography>
          <Button onClick={props.onAdd}>+</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
