import { React, useRef, useState } from "react";
import { Typography } from "@mui/material";
import InputField from "../UI/InputField";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <InputField
          ref={amountInputRef}
          label="amount"
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <br />
        <button variant="contained" size="small" sx={{ margin: "10px" }}>
          +
        </button>
        {!amountIsValid && <Typography>amount not valid</Typography>}
        <button variant="contained" size="small" color="error">
          -
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
