import React from "react";
import { BsInfo } from "react-icons/bs";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const ShowToshoInfo = (props) => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      aria-label="Show Tosho Info"
      icon={BsInfo}
    />
  );
};

export default ShowToshoInfo;
