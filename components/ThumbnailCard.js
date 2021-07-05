import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Card from './Card';

export default function ThumbnailCard() {
  return (
    <Card>
      <Box
        height="44"
        borderTopRadius="md"
        width="full"
        bgGradient="linear(to-r, purple.300, indigo.500)"
      />
      <Box p="4">
        <Text fontWeight="medium">Authentication</Text>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          6 components
        </Text>
      </Box>
    </Card>
  );
}
