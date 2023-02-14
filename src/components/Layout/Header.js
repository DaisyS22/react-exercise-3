import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Badge,
  Button,
  ListItem,
  List,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TaraGmeet
          </Typography>

          <List sx={{ display: "flex", justifyItems: "center" }}>
            <ListItem>
              <Link
                to="/product/new"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/product/new"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Add Product
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/product/new"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Edit Product
              </Link>
            </ListItem>
          </List>

          <Badge badgeContent={numberOfCartItems} color="error">
            <Link to="/cart-items">
              <ShoppingCartOutlinedIcon onClick={props.onShowCart}>
                Cart
              </ShoppingCartOutlinedIcon>
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
