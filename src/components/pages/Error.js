import React from "react";
import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Header from "../Layout/Header";

const Error = () => {
  const error = useRouteError();

  let name = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    name = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <Header></Header>
      <Typography name={name}>{message}</Typography>
    </>
  );
};

export default Error;
