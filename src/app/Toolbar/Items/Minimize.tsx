import React from "react";
const BrowserWindow = require("electron").remote;
import { MdRemove } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { windowControlsOptions } from "./_options";

const Minimize = () => {
  function handleClick() {
    const win = BrowserWindow.getCurrentWindow();
    win.minimize();
  }

  return (
    <IconButton
      {...windowControlsOptions}
      aria-label="Minimize Window"
      icon={MdRemove}
      onClick={handleClick}
    />
  );
};

export default Minimize;
