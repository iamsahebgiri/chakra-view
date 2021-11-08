import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BaseLayout from "@/layouts/base";
import Hero from "@/components/Hero";
import SubHeading from "@/components/SubHeading";
import ThumbnailCard from "@/components/ThumbnailCard";
import { Example } from "@/components/temp/Example";
import { Resizable } from "re-resizable";
import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState({ width: 300, height: 200 });

  return (
    <BaseLayout title="Home">
      {/* <Box maxW="xl"> */}
        <Resizable
          size={size}
          onResizeStop={(_, __, ___, d) => {
            setSize({
              width: size.width + d.width,
              height: size.height + d.height,
            });
          }}
          handleComponent={{ right: <FrameHandle /> }}
        >
          Sample with size
        </Resizable>
      {/* </Box> */}
    </BaseLayout>
  );
}


const FrameHandle = () => {
  return (
    <Box
      w="5px"
      bg="blackAlpha.300"
      bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`}
      h="full"
    ></Box>
  );
};
