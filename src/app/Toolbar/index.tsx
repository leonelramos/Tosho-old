import React from "react";
import { Box } from "@chakra-ui/core";
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

const Toolbar = (props) => {
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
      flexGrow: 2,
      alignSelf: "stretch",
    },
    items: [],
  };

  const infoButton = {
    options: {
      justifyContent: "flex-end",
    },
    items: [<ToshoInfo size="sm" />],
  };

  const windowControls = {
    options: { justifyContent: "flex-start" },
    items: [<Minimize />, <Maximize />, <Close />],
  };

  const segments = [toolbar, dragRegion, infoButton, windowControls];

  return <MenuBar options={options} segments={segments} />;
};

export default Toolbar;
