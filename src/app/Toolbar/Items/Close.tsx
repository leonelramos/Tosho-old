import React from "react";
const BrowserWindow = require("electron").remote;
import { MdClose } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { windowControlsOptions } from "./_options";

const Close = () => {
  function handleClick() {
    const win = BrowserWindow.getCurrentWindow();
    win.close();
  }

  return (
    <IconButton
      {...windowControlsOptions}
      aria-label="Close Tosho"
      icon={MdClose}
      onClick={handleClick}
    />
  );
};

export default Close;
