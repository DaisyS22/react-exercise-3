import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import ProductForm from "../Products/ProductForm";

const EditProduct = () => {
  const data = useRouteLoaderData("product-detail");

  return <ProductForm product={data.product} />;
};

export default EditProduct;
