import React from "react";
import { IoMdBookmarks } from "react-icons/io";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const BookmarkOptions = (props) => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      aria-label="Show Bookmark Options"
      icon={IoMdBookmarks}
    />
  );
};

export default BookmarkOptions;
