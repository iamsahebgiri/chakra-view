import { Box, SimpleGrid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import BaseLayout from '@/layouts/base';
import Hero from '@/components/Hero';
import SubHeading from '@/components/SubHeading';
import ThumbnailCard from '@/components/ThumbnailCard';

export default function Home() {
  return (
    <BaseLayout title="Home">
      <Hero />
      <Box maxW="6xl" mx="auto" px={['4']}>
        <Box borderBottom="1px" mb="12" py="4" borderBottomColor={useColorModeValue("gray.200", "gray.700")}>
          <Heading size="md" mb="2">
            Marketing
          </Heading>
          <SubHeading>
            Landing page heroes, feature sections, newsletter sign up forms —
            everything you need to build beautiful marketing websites.
          </SubHeading>
        </Box>
        <SimpleGrid minChildWidth="280px" spacing="8">
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
        </SimpleGrid>
      </Box>
    </BaseLayout>
  );
}
