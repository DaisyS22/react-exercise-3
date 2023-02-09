import React from "react";
import { Typography, AppBar, Toolbar, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

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

          <Badge badgeContent={numberOfCartItems} color="error">
            <ShoppingCartOutlinedIcon onClick={props.onShowCart}>
              Cart
            </ShoppingCartOutlinedIcon>
          </Badge>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
