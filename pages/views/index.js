// import ComponentDemo from '@/components/component-demo';
import BaseLayout from '@/layouts/base';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  IconButton,
  Box,
  Heading,
  Flex,
  Button,
  useColorModeValue,
  chakra,
  HStack,
} from '@chakra-ui/react';
import { HiChevronRight, HiOutlineClipboard } from 'react-icons/hi';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { demoScope } from '@/components/component-demo/demo-scope';
import { cleanCode } from '@/components/component-demo/clean-code';

export default function ViewsPage() {
  const code = require(`!!raw-loader!pages/preview/alerts/error`).default;
  return (
    <BaseLayout title="Views">
      <Box maxW="6xl" mx="auto" py="16">
        <Box>
          <Breadcrumb
            spacing="12px"
            color="gray.500"
            separator={<Icon as={HiChevronRight} color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                _hover={{ textDecoration: 'none' }}
                href="/"
                textDecoration="none"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink _hover={{ textDecoration: 'none' }} href="#">
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink _hover={{ textDecoration: 'none' }} href="#">
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box mt="3" mb="6">
          <Heading>Authentication</Heading>
        </Box>
        <Flex mb="2" justify="space-between" align="center">
          <Heading as="h3" fontSize="md" fontWeight="medium">
            Alternative side-by-side with images
          </Heading>
          <HStack>
            <Flex
              bg={useColorModeValue('gray.200', 'gray.700')}
              p="1"
              rounded="lg"
            >
              <chakra.button
                bg="white"
                py="1"
                px="3"
                rounded="md"
                shadow="sm"
                fontWeight="medium"
              >
                Preview
              </chakra.button>
              <chakra.button py="1" px="3" rounded="md" fontWeight="medium">
                Code
              </chakra.button>
            </Flex>
            <IconButton
              rounded="md"
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={<Icon h="6" w="6" as={HiOutlineClipboard} />}
              _focus={{ boxShadow: 'none' }}
            />
          </HStack>
        </Flex>
        <Box rounded="md">
          <LiveProvider
            code={cleanCode(code, 'alerts/error')}
            scope={{ ...demoScope }}
          >
            {/* <LiveEditor /> */}
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </Box>
      </Box>
    </BaseLayout>
  );
}
