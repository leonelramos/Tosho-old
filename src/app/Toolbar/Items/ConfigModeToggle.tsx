import React from "react";
import { MdSettings } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const ConfigModeToggle = (props) => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      aria-label="Add Item"
      icon={MdSettings}
    />
  );
};

export default ConfigModeToggle;
