import React from "react";
import {
  json,
  useParams,
  useLoaderData,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import ProductItem from "../Products/ProductItem/ProductItem";

const ProductDetail = () => {
  const data = useRouteLoaderData("product-detail");

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

export async function action({ params, request }) {
  const productId = params.productId;
  const response = await fetch("http://localhost:8080/products/" + productId, {
    // method: "DELETE",
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete product" }, { status: 500 });
  }

  return redirect("/");
}
