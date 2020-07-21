import React from "react";
import { Flex } from "@chakra-ui/core";

const Bookshelf = (props) => {
  return (
    <Flex
      className="bookshelf"
      alignItems="center"
      flexWrap="wrap"
      justify="space-between"
    ></Flex>
  );
};

export default Bookshelf;
