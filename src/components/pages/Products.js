import { Typography } from "@mui/material";
import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductList from "../Products/ProductList";

const Products = () => {
  const data = useLoaderData();

  const products = data.products;

  // if (data.isError) {
  //   return <Typography>{data.message}</Typography>;
  // }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Products;

export async function loader() {
  const response = await fetch("http://localhost:8080/products");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch products" };
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch products" }),
    //   { status: 500 }
    // );
    return json({ message: "Could not fetch products" }, { status: 500 });
  } else {
    return response;
  }
}
