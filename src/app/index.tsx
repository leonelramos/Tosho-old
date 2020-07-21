import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React from "react";
import { Router } from "@reach/router";
import Toolbar from "./Toolbar";
import Bookshelf from "./Bookshelf";
import BookRenderer from "../components/FileRender";
import "./app.scss";

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Toolbar path="/" />
      </Router>
      <Router>
        <Bookshelf path="/" />
        <BookRenderer path="book/:id/" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
