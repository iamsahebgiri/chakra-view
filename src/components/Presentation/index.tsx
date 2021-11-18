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
import React from "react";
import {
  HiOutlineArrowsExpand,
  HiOutlineEye,
  HiOutlineCode,
} from "react-icons/hi";

import CodeBlock from "./CodeBlock";
import ResizableFrame from "./ResizableFrame";

const TABS = [
  {
    text: "Preview",
    icon: HiOutlineEye,
  },
  { text: "Code", icon: HiOutlineCode },
];

const Presentation = () => {
  const [, setTabIndex] = React.useState(0);

  const componentUrl = "templates/feedback/alerts/with-description";
  return (
    <Box id="Autentication" height="full">
      <Tabs
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
            fontWeight={600}
            isTruncated
          >
            Autentication
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
                    <Icon w={4} h={4} mt="1px" as={tab.icon} mr={[0, 2]} />
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
            <Link href={componentUrl} passHref>
              <IconButton
                as="a"
                rounded="lg"
                cursor="pointer"
                icon={<HiOutlineArrowsExpand />}
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
              bg={useColorModeValue("gray.700", "gray.700")}
            >
              <Box w="full">
                <ResizableFrame componentUrl={componentUrl} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel p={0}>
            <CodeBlock componentUrl={componentUrl} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Presentation;
