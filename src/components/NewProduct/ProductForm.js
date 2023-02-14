import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Button,
  CardActions,
} from "@mui/material";

const ProductForm = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      name: enteredName,
      price: enteredPrice,
    };

    props.onSaveProductData(itemData);
    console.log(itemData);
    setenteredName("");
    setEnteredPrice("");
  };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={submitHandler}
    >
      <Grid item xs={6} sx={{ m: 10 }}>
        <Card>
          <CardHeader title="New Product" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  value={enteredName}
                  id="outlined-size-normal"
                  onChange={nameChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Price"
                  id="outlined-start-adornment"
                  value={enteredPrice}
                  onChange={priceChangeHandler}
                  sx={{ width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">PHP</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
