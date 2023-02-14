import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = (props) => {
  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: Math.random().toString(),
    };
    console.log(itemData);
  };

  return (
    <div>
      <ProductForm onSaveProductData={saveItemDataHandler} />
    </div>
  );
};

export default NewProduct;
