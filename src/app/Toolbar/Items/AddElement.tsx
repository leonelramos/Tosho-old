import React from "react";
import { MdAdd } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const AddElement = () => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      variant="ghost"
      aria-label="Add Item"
      icon={MdAdd}
    />
  );
};

export default AddElement;
