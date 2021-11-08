import { Box, Button, useClipboard } from "@chakra-ui/react";
import { useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const CodeSample = ({ template, category, subCategory }) => {
  const code =
    require(`!!raw-loader!/pages/templates/${category.id}/${subCategory.id}/${template.filename}`).default;
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
