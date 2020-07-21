import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React from "react";
import Toolbar from "./Toolbar";
import Bookshelf from "./Bookshelf";
import "./app.scss";

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Toolbar />
      <Bookshelf />
    </ThemeProvider>
  );
};

export default App;
