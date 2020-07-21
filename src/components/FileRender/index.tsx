import React from "react";
import { Link } from "@reach/router";

const FileRenderer = (props) => {
  return (
    <Link to="/">
      <div>
        <h1>YOU HAVE RENDERED THE BOOK WITH ID: {props.id}</h1>
      </div>
    </Link>
  );
};

export default FileRenderer;
