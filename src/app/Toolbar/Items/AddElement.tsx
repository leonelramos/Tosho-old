import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Box,
} from "@chakra-ui/core";
import { MdAdd } from "react-icons/md";
import { AiFillFileAdd, AiFillFolderAdd } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import IconButton from "../../../components/IconButton";
import { toolbarItemsOptions } from "./_options";
const button = (
  <IconButton
    {...toolbarItemsOptions}
    variant="ghost"
    aria-label="Add Item"
    icon={MdAdd}
  />
);
const AddElement = () => {
  const iconProps = { size: "20px", marginRight: "5px" };
  return (
    <Menu>
      <MenuButton
        transition="all 0.2s"
        rounded="md"
        _hover={{ bg: "gray.100" }}
        _focus={{ outline: 0, boxShadow: "outline" }}
      >
        {button}
      </MenuButton>
      <MenuList placement="bottom-start">
        <MenuItem>
          <Box as={AiFillFileAdd} {...iconProps} />
          Import Book
        </MenuItem>
        <MenuItem>
          <Box as={AiFillFolderAdd} {...iconProps} />
          Import Folder
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Box as={GiBookshelf} {...iconProps} />
          Add Shelf
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AddElement;
