import { React, useRef } from "react";
import { Button } from "@mui/material";
import InputField from "../UI/InputField";
import { Stack } from "@mui/system";

const ItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <InputField
          ref={amountInputRef}
          label="amount"
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "100",
            step: "1",
            defaultValue: "1",
          }}
        />
        <br />
        <Stack spacing={2} direction="row">
          <Button type="submit">add</Button>
        </Stack>
      </form>
    </>
  );
};

export default ItemForm;
