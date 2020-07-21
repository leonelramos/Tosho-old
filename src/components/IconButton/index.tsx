import React from "react";
import { IconButton } from "@chakra-ui/core";

const ExtendedIconButton = (props) => {
  return <IconButton {...props} icon={props.icon} onClick={props.onClick} />;
};

export default ExtendedIconButton;
