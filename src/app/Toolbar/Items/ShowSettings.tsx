import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const ShowSettings = (props) => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      aria-label="Open Settings Drawer"
      icon={AiOutlineMenuUnfold}
    />
  );
};

export default ShowSettings;
