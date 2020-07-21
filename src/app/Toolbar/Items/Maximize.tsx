import * as React from "react";
import { useState } from "react";
const BrowserWindow = require("electron").remote;
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { windowControlsOptions } from "./_options";

const Maximize = () => {
  const [maximized, setMaximized] = useState(false);

  function handleClick() {
    const win = BrowserWindow.getCurrentWindow();
    maximized ? win.unmaximize() : win.maximize();
    setMaximized(!maximized);
  }

  return (
    <IconButton
      {...windowControlsOptions}
      aria-label="Minimize Window"
      icon={maximized ? MdFullscreenExit : MdFullscreen}
      onClick={handleClick}
    />
  );
};

export default Maximize;
