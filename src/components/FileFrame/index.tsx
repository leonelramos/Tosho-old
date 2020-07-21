import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "@reach/router";
import testImage from "../../test-assets/test-covers/psychopath-test.jpg";

const FileFrame = ({ id, metadata }) => {
  const [configMode, setConfigMode] = useState(false);
  return (
    <>
      <div className="file-frame">
        <Link to={`book/${id}`}>
          <Box>
            <img src={testImage} />
          </Box>
        </Link>
        <div onClick={() => setConfigMode(!configMode)}>Enter config mode</div>
      </div>
    </>
  );
};

export default FileFrame;
