import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" p={6}>
      <Container maxW="4xl" p={0}>
        <Text>Footer</Text>
      </Container>
    </Box>
  );
}
