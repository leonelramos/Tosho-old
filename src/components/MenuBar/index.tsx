import React from "react";
import { Box } from "@chakra-ui/core";

const MenuBar = (props) => {
  const { options, segments } = props;
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
            {segment.items.map((Item, index) => {
              return <div key={index}>{Item}</div>;
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default MenuBar;
