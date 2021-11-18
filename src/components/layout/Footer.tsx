import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" w="full" bg="red">
      <Text align="center" maxW="7xl">
        {new Date().getFullYear()} -{" "}
        <Link href="https://iamsaheb.vercel.app" isExternal>
          Saheb Giri
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
