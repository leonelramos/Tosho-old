import React from "react";
import { MdSearch } from "react-icons/md";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";

const SearchBookshelf = (props) => {
  return (
    <IconButton
      {...toolbarItemsOptions}
      aria-label="Search Bookshelf"
      icon={MdSearch}
    />
  );
};

export default SearchBookshelf;
