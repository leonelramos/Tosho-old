import React from "react";
import { Box } from "@chakra-ui/core";

const MenuBar = ({ options, segments }) => {
  return (
    <Box d="flex" alignItems="baseline" {...options}>
      {segments.map((segment, index) => {
        return (
          <Box
            key={index}
            d="flex"
            alignItems="baseline"
            justifyContent="flex-start"
            {...segment.options}
          >
            {segment.items.map((Item) => {
              return Item;
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default MenuBar;
