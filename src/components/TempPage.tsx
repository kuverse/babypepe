"use client";

import { Box, Text, Image, Flex } from "@chakra-ui/react";

const UnderConstruction: React.FC = () => {
  return (
    <div
    style={{
      height: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'PepeFont, sans-serif',
    }}
  >
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box mb={6}>
        <Image
          src="/images/pepegif.gif" // Replace with your own image path
          alt="Under Construction"
          width={300}
          height={300}
        />
      </Box>
      <Text fontSize="4xl" fontWeight="bold" color="white" mb={2}>
        Chill with some good vibes.
      </Text>
      <Text fontSize="2xl" >
        Please check back later.
      </Text>
    </Flex>
    </div>
  );
};

export default UnderConstruction;
