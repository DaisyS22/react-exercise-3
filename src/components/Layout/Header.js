import React, { Component, Fragment } from "react";
import { Typography, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = (props) => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MariMart
          </Typography>

          <IconButton onClick={props.onShowCart}>
            <Badge badgeContent={5} color="error">
              <ShoppingCartOutlinedIcon>Cart</ShoppingCartOutlinedIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
