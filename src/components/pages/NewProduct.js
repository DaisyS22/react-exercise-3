import React from "react";
import { json, redirect } from "react-router-dom";
import ProductForm from "../Products/ProductForm";

const NewProduct = () => {
  return <ProductForm></ProductForm>;
};

export default NewProduct;

export async function action({ request, params }) {
  const data = await request.formData();
  const productData = {
    name: data.get("name"),
    image: data.get("image"),
    price: data.get("price"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save product" }, { status: 500 });
  }

  return redirect("/");
}
