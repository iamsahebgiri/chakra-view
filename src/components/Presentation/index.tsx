/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { BiCode, BiShow } from "react-icons/bi";
import { HiOutlineArrowsExpand } from "react-icons/hi";

import { ComponentProps } from "types/component";

import CodeBlock from "./CodeBlock";
import ResizableFrame from "./ResizableFrame";

const TABS = [
  {
    text: "Preview",
    icon: BiShow,
  },
  { text: "Code", icon: BiCode },
];

const Presentation = ({ name, path }: PropsWithChildren<ComponentProps>) => {
  const [, setTabIndex] = React.useState(0);
  const routerPath = `/components/${path.split(".")[0]}`;
  return (
    <Box id="Autentication" height="full">
      <Tabs
        variant="unstyled"
        onChange={(index) => {
          setTabIndex(index);
        }}
      >
        <TabList
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          py={3}
        >
          <Text
            color={useColorModeValue("gray.800", "gray.300")}
            fontSize="md"
            fontWeight={500}
            isTruncated
          >
            {name}
          </Text>
          <HStack spacing={4} color={useColorModeValue("gray.500", "gray.300")}>
            <Flex bg={useColorModeValue("gray.200", "gray.600")} rounded="lg">
              {TABS.map((tab) => (
                <Tab
                  m="0.5"
                  py="1.5"
                  key={tab.text}
                  color={useColorModeValue("gray.700", "gray.200")}
                  rounded="md"
                  _focus={{
                    boxShadow: "none",
                  }}
                  _selected={{
                    bg: useColorModeValue("white", "gray.50"),
                    color: useColorModeValue("orange.600", "orange.500"),
                  }}
                >
                  <Flex alignItems="center" justifyContent="center">
                    <Icon w={5} h={5} mt="1px" as={tab.icon} mr={[0, 2]} />
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      display={["none", "block"]}
                    >
                      {tab.text}
                    </Text>
                  </Flex>
                </Tab>
              ))}
            </Flex>
            <Link href={routerPath} passHref>
              <IconButton
                as="a"
                rounded="lg"
                cursor="pointer"
                icon={<Icon as={HiOutlineArrowsExpand} w={4} h={4} />}
                size="md"
                variant="ghost"
                aria-label="Open in Fullscreen"
                title="Open in Fullscreen"
                target="_blank"
              />
            </Link>
          </HStack>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Box
              overflow="clip"
              rounded="md"
              bg={useColorModeValue("gray.500", "gray.700")}
            >
              <Box w="full">
                <ResizableFrame componentUrl={routerPath} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel p={0}>
            <CodeBlock path={path} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Presentation;
