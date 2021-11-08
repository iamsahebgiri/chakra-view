import { useEffect, useRef, useState, useReducer } from "react";
import { Box, chakra, useColorMode } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

import { createPortal } from "react-dom";

import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";

import { getExampleUrl } from "./getExampleUrl";

const MIN_HEIGHT = 360;

const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  const newCache = createCache({
    container,
    key: "with-emotion",
  });
  return newCache;
});

export const ResizableFrame = ({ template, category, subCategory }) => {
  const ref = useRef(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState(300);
  const [exampleUrl, setExampleUrl] = useState("");

  const doc = ref?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  const resizeIframe = (iframe) => {
    const iframeHeight =
      iframe?.current?.contentWindow?.document?.body?.scrollHeight;
    if (iframeHeight) setHeight(iframeHeight);

    window.requestAnimationFrame(() => resizeIframe(iframe));
  };

  useEffect(() => {
    // automatically resize iframe height to fit content
    ref && resizeIframe(ref);
  }, [ref]);

  useEffect(() => {
    setExampleUrl(getExampleUrl(category, subCategory, template));
  }, []);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  // Reload iframe content when colorMode changes
  useEffect(() => {
    ref.current?.contentWindow?.location.reload();
  }, [colorMode]);

  const getHeight = () =>
    height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT;

  return (
    <Resizable
      bounds={"parent"}
      minWidth={260}
      maxWidth="100%"
      minHeight={height}
      maxHeight={height}
      handleComponent={{ right: <FrameHandle /> }}
    >
      <iframe
        loading={"lazy"}
        width={"100%"}
        height={getHeight()}
        src={exampleUrl}
        onLoad={syncHeight}
        ref={ref}
      >
        {insertionPoint &&
          mountNode &&
          createPortal(
            <CacheProvider
              value={memoizedCreateCacheWithContainer(insertionPoint)}
            ></CacheProvider>,
            mountNode
          )}
      </iframe>
    </Resizable>
  );
};

const FrameHandle = () => {
  return <Box h="full" w="2" bg="gray.200"></Box>;
};
