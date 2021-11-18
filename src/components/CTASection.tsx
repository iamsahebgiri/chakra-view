import {
  Box,
  Button,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const repoLink = "https://github.com/iamsahebgiri/chakra-view/";

const CTASection = () => {
  return (
    <Box as="section" id="components">
      <Box
        maxW="3xl"
        mx="auto"
        px={["6", "4"]}
        pt={["28", "44"]}
        pb={["14", "28"]}
        textAlign="center"
      >
        <Tag colorScheme="teal" variant="subtle" mb="8">
          Free and Open Source
        </Tag>
        <Heading size="2xl">
          <Text bgGradient="linear(to-r, orange.500, orange.600)" bgClip="text">
            Modern UI components
          </Text>
          crafted with Chakra UI
        </Heading>
        <Text
          mt="6"
          maxW="lg"
          mx="auto"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Over 30+ of professionally designed and fully responsive Chakra UI
          components ready to drop into your React project.
        </Text>

        <Box my="10">
          <Button as="a" href="#components" colorScheme="orange">
            View components
          </Button>
          <Button
            ml="4"
            as="a"
            href={repoLink}
            target="_blank"
            rel="noopener noreferer"
          >
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CTASection;
