import { Box, Button, Heading, Text, Tag, Badge } from '@chakra-ui/react';
import SubHeading from '@/components/SubHeading';

export default function Hero() {
  return (
    <>
      <Box as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: '6', lg: '4' }}
          py={{ base: '16', sm: '32' }}
          textAlign="center"
        >
          {/* <Tag colorScheme="teal" variant="subtle" mb="8">
            Free and Open Source
          </Tag> */}
          <Heading size="2xl">
            <Text
              bgGradient="linear(to-r, orange.500, orange.600)"
              bgClip="text"
            >
              Modern UI components
            </Text>{' '}
            crafted with Chakra UI
          </Heading>
          <SubHeading mt="6" maxW="lg" mx="auto">
            Over 30+ of professionally designed and fully responsive Chakra UI
            components ready to drop into your React project.
          </SubHeading>

          <Box my="10" >
            <Button as="a" href="#" colorScheme="orange">
              View components
            </Button>
            <Button
              ml="4"
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferer"
            >
              Github
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
