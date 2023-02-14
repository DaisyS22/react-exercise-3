import React from "react";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";

import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
};

export default RootLayout;
