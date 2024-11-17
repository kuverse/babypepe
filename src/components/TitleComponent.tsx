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
          top: "30%", // Center vertically
          left: "20%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for element dimensions
          zIndex: 2,
        }}
      >
        <Heading
          as="h1"
          fontSize="14vw"
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          textAlign="center"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Baby pepe
        </Heading>
      </motion.div>

      <Flex
        position="absolute"
        bottom="10px" // Adjust as needed
        left="50%"
        transform="translateX(-50%)"
        direction="column"
        alignItems="center"
      >
      <SwapBuyButtons />
      <MarketCapVolume />

      </Flex>

    </Box>
  );
};

export default TitleComponent;
