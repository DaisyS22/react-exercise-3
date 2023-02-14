import React from "react";
import { json, useParams, useLoaderData } from "react-router-dom";
import ProductItem from "../Products/ProductItem/ProductItem";

const ProductDetail = () => {
  const data = useLoaderData();

  return (
    <>
      <ProductItem product={data.product}></ProductItem>
    </>
  );
};

export default ProductDetail;

export async function loader({ request, params }) {
  const id = params.productId;

  const response = await fetch("http://localhost:8080/products/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected product" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
