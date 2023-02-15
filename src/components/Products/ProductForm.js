import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";

const ProductForm = ({ method, product }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Grid container justifyContent="center">
      {/* <p>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={product ? product.name : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={product ? product.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Price</label>
        <input
          id="date"
          type="text"
          name="price"
          required
          defaultValue={product ? product.price : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={product ? product.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disable={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div> */}
      <Grid item xs={6} sx={{ m: 10 }}>
        <Form method="post">
          <Card>
            <CardHeader name="Add Product" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    id="name"
                    type="text"
                    name="name"
                    required
                    defaultValue={product ? product.name : ""}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Image"
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={product ? product.image : ""}
                    InputProps={{
                      startAdornment: <ImageIcon fontsize="large"></ImageIcon>,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Price"
                    id="price"
                    type="number"
                    name="price"
                    // sx={{ width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">PHP</InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    id="description"
                    name="description"
                    multiline
                    rows={4}
                    defaultValue={product ? product.description : ""}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="button"
                onClick={cancelHandler}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Save"}
              </Button>
            </CardActions>
          </Card>
        </Form>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
