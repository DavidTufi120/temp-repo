import { TextField } from "@mui/material";
import "./styles.css";
import React from "react";
import Props from "prop-types";

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <TextField
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      placeholder={"Type your search"}
      type="search"
      id="outlined-basic"
      label="Search"
      variant="outlined"
    />
  );
};

SearchInput.propTypes = {
  searchValue: Props.string.isRequired,
  handleChange: Props.func.isRequired,
};
