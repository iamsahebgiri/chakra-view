/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Box, Button, useClipboard } from "@chakra-ui/react";
import { useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  componentUrl: string;
};

const CodeBlock = ({ componentUrl }: Props) => {
  const code = require(`!!raw-loader!/src/pages/${componentUrl}.tsx`).default;
  const { hasCopied, onCopy } = useClipboard(code);
  const codeRef = useRef(null);

  return (
    <Box fontSize="sm" position="relative" ref={codeRef}>
      <Button size="sm" position="absolute" top={4} right={4} onClick={onCopy}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>

      <Box rounded="md" overflow="clip">
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          codeTagProps={{
            style: {
              fontFamily: `"IBM Plex Mono",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeBlock;