import React from "react";

import MenuBar from "../../components/MenuBar";
import Minimize from "./Items/Minimize";
import Maximize from "./Items/Maximize";
import Close from "./Items/Close";
import ShowSettings from "./Items/ShowSettings";
import AddItem from "./Items/AddElement";
import BookmarkOptions from "./Items/BookmarkOptions";
import ConfigModeToggle from "./Items/ConfigModeToggle";
import SearchBookshelf from "./Items/SearchBookshelf";
import ToshoInfo from "./Items/ToshoInfo";

const Toolbar = () => {
  const options = { className: "toolbar" };

  const toolbar = {
    options: { justifyContent: "flex-start" },
    items: [
      <ShowSettings />,
      <AddItem />,
      <BookmarkOptions />,
      <ConfigModeToggle />,
      <SearchBookshelf />,
    ],
  };

  const dragRegion = {
    options: {
      className: "drag-zone",
      justifyContent: "flex-end",
      flexGrow: 2,
    },
    items: [],
  };

  const infoButton = {
    options: {
      justifyContent: "flex-end",
    },
    items: [<ToshoInfo />],
  };

  const windowControls = {
    options: { justifyContent: "flex-start" },
    items: [<Minimize />, <Maximize />, <Close />],
  };

  const segments = [toolbar, dragRegion, infoButton, windowControls];

  return <MenuBar options={options} segments={segments} />;
};

export default Toolbar;
