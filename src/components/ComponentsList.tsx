import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function ComponentsList() {
  return (
    <Box maxW="7xl" mx="auto" px={["4"]}>
      <Box
        borderBottom="1px"
        mb="12"
        py="4"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Heading size="md" mb="2">
          Marketing
        </Heading>
        <Text color={useColorModeValue("gray.500", "gray.400")}>
          Landing page heroes, feature sections, newsletter sign up forms —
          everything you need to build beautiful marketing websites.
        </Text>
      </Box>
      <SimpleGrid minChildWidth="280px" spacing="8">
        <Box
          borderRadius="md"
          boxShadow="sm"
          bg={useColorModeValue("white", "gray.700")}
        >
          <Box
            height="44"
            borderTopRadius="md"
            width="full"
            bgGradient="linear(to-r, green.400, teal.300)"
          />
          <Box p="4">
            <Text fontWeight="medium">Authentication</Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              6 components
            </Text>
          </Box>
        </Box>
        <Box borderRadius="md" boxShadow="sm">
          <Box
            height="44"
            borderTopRadius="md"
            width="full"
            bgGradient="linear(to-r, green.400, teal.300)"
          />
          <Box p="4">
            <Text fontWeight="medium">Authentication</Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              6 components
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ComponentsList;
