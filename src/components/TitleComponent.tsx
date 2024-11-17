"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MarketCapVolume from "./MarketCap";
import SwapBuyButtons from "./BuyAndSwapButtons";

const TitleComponent: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100vw"
      minHeight="100vh"
      backgroundImage="url('/backgrounds/pepe_beach.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      overflow="hidden"
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "18%",
          width: "100%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <SwapBuyButtons />

        <Heading
          as="h1"
          fontSize={{ base: "15vw", md: "150px" }} // Responsive font size
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          textAlign="center"
          paddingX={4} // Padding to avoid edge cutoff
          textShadow="1px 1px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Baby pepe
        </Heading>
      </motion.div>

      {/* Buttons and MarketCapVolume */}
      <Flex
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        direction="column"
        alignItems="center"
        width="90%" // Ensure buttons stay within screen width
        maxWidth="500px" // Optional: Limit max width
        gap={4} // Space between buttons
      >
        <MarketCapVolume />
      </Flex>
    </Box>
  );
};

export default TitleComponent;
