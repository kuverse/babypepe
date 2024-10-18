"use client";

import { Box, Text, Image, Flex } from "@chakra-ui/react";

const UnderConstruction: React.FC = () => {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      bg="gray.900"
    >
      <Box mb={6}>
        <Image
          src="/images/pepep2.png" // Replace with your own image path
          alt="Under Construction"
          width={300}
          height={300}
        />
      </Box>
      <Text fontSize="3xl" fontWeight="bold" color="white" mb={2}>
        Were working on it!
      </Text>
      <Text fontSize="lg" color="gray.400">
        Please check back later.
      </Text>
    </Flex>
  );
};

export default UnderConstruction;
