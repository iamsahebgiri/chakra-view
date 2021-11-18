/* eslint-disable import/no-extraneous-dependencies */
import { useColorMode } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import weakMemoize from "@emotion/weak-memoize";
import { Resizable } from "re-resizable";
import { RefObject, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MIN_HEIGHT = 360;

const memoizedCacheContainer = weakMemoize((container: HTMLElement) => {
  return createCache({
    container,
    key: "with-emotion",
  });
});

type Props = {
  componentUrl: string;
};

const ResizableFrame = ({ componentUrl }: Props) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState<number | undefined>(300);

  const doc = ref?.current?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  useEffect(() => {
    const resizeIframe = (iframe: RefObject<HTMLIFrameElement>) => {
      const iframeHeight =
        iframe?.current?.contentWindow?.document?.body?.scrollHeight;
      if (iframeHeight) setHeight(iframeHeight);

      window.requestAnimationFrame(() => resizeIframe(iframe));
    };

    // automatically resize iframe height to fit content
    if (ref) {
      resizeIframe(ref);
    }
  }, [ref]);

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
      bounds="parent"
      minWidth={260}
      maxWidth="100%"
      minHeight={height}
      maxHeight={height}
    >
      <iframe
        title={componentUrl}
        loading="lazy"
        width="100%"
        height={getHeight()}
        src={componentUrl}
        onLoad={syncHeight}
        ref={ref}
      >
        {insertionPoint &&
          mountNode &&
          createPortal(
            <CacheProvider value={memoizedCacheContainer(insertionPoint)} />,
            mountNode
          )}
      </iframe>
    </Resizable>
  );
};

export default ResizableFrame;
