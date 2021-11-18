import {
  Box,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";

import { links, NavLink } from "data/nav-links";

import { Logo, LogoIcon } from "./Logo";
import ThemeToggle from "./ThemeToggle";

const HeaderLink = ({ name, href, isExternal }: NavLink) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split("/")[1]}` === href;

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColorLight = useColorModeValue("gray.900", "gray.300");
  const textColorDark = useColorModeValue("gray.700", "gray.400");

  <NextLink href={href} passHref>
    <Link
      _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
      py="1"
      px="2"
      rounded="md"
    >
      {name}
    </Link>
  </NextLink>;
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{ bg: bgColor }}
        py="1"
        px="2"
        rounded="md"
        isExternal={isExternal}
      >
        <Text
          fontSize="sm"
          color={isActive ? textColorLight : textColorDark}
          fontWeight={isActive ? "medium" : "normal"}
        >
          {name}
        </Text>
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href, isExternal }: NavLink) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split("/")[1]}` === href;

  const bgColor = useColorModeValue("orange.100", "orange.300");
  const textColorActive = useColorModeValue("gray.900", "orange.600");
  const textColorDark = useColorModeValue("gray.700", "gray.400");

  return (
    <NextLink href={href} passHref>
      <Link
        bgColor={isActive ? bgColor : undefined}
        px="4"
        py="2"
        rounded="md"
        width="full"
        isExternal={isExternal}
      >
        <Text
          color={isActive ? textColorActive : textColorDark}
          fontWeight={isActive ? "semibold" : undefined}
        >
          {name}
        </Text>
      </Link>
    </NextLink>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      as="header"
      bgColor={bgColor}
      shadow="sm"
      position="fixed"
      width="full"
      zIndex="1"
    >
      <Container maxW="7xl" py={["2", "3"]}>
        <Flex justify="space-between" align="center">
          <IconButton
            aria-label="open menu"
            onClick={onOpen}
            display={["flex", "flex", "none"]}
            variant="unstyled"
            icon={<Icon as={HiOutlineMenu} h={6} w={6} />}
          />

          <Box>
            <NextLink href="/">
              <Link>
                <Box display={["none", "block"]}>
                  <Logo />
                </Box>
                <Box display={["block", "none"]}>
                  <LogoIcon />
                </Box>
              </Link>
            </NextLink>
          </Box>
          <Flex alignItems="center">
            <HStack spacing="6" mr="6" display={["none", "none", "flex"]}>
              {links.map((link) => (
                <HeaderLink
                  key={link.href}
                  isExternal={link.isExternal}
                  href={link.href}
                  name={link.name}
                />
              ))}
            </HStack>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent maxW="2xs" bg={bgColor}>
            <DrawerHeader h="14">
              <Logo />
            </DrawerHeader>

            <Divider />

            <DrawerBody mt="3" as="header">
              <VStack spacing="1" alignItems="flex-start">
                {links.map((link) => (
                  <MobileHeaderLink
                    key={link.href}
                    href={link.href}
                    name={link.name}
                    isExternal={link.isExternal}
                  />
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
