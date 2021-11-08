import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
  Link,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import SiteLogo from './SiteLogo';
import navLinks from '@/data/navLinks.json';
import DarkModeButton from './DarkModeButton';

const HeaderLink = ({ name, href }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }} py="1" px="2" rounded="md">
        {name}
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;
  return (
    <NextLink href={href} passHref>
      <Link width="full" _focus={{ boxShadow: 'none' }}>
        <Flex
          bgColor={isActive && 'orange.200'}
          color={isActive && 'orange.700'}
          fontWeight={isActive && 'semibold'}
          px="4"
          py="2"
          rounded="md"
        >
          <Text>{name}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bgColor={useColorModeValue('white', 'gray.900')}
      shadow="sm"
      position="fixed"
      width="100%"
      zIndex="1"
    >
      <Container maxW="7xl" py={['2', '3']}>
        <Flex justify="space-between" align="center">
          <IconButton
            onClick={onOpen}
            display={['flex', 'flex', 'none']}
            variant="unstyled"
            icon={<Icon as={HiMenuAlt4} h="6" w="6" />}
          />

          <Box>
            <NextLink href="/">
              <Link>
                <SiteLogo />
              </Link>
            </NextLink>
          </Box>
          <Flex alignItems="center">
            <HStack spacing="6" mr="6" display={['none', 'none', 'flex']}>
              {navLinks.map((link) => (
                <HeaderLink key={link.href} href={link.href} name={link.name} />
              ))}
            </HStack>
            <DarkModeButton />
          </Flex>
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent maxW="2xs">
            <DrawerHeader>
              <SiteLogo />
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing="1" alignItems="flex-start">
                {navLinks.map((link) => (
                  <MobileHeaderLink
                    key={link.href}
                    href={link.href}
                    name={link.name}
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
