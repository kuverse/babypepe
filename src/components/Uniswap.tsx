"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SwapBabyPepe: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById("uniswap-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.tabIndex = -1; // Prevent focus
    }
  }, []);

  const handleShowIframe = () => {
    setShowIframe(true); // Show the iframe when the image is clicked
  };
  const Bubble: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent darker background
        border: "2px solid white", // White border
        borderRadius: "15px",
        padding: "16px",
        margin: "10px 0", // Consistent vertical spacing
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Optional shadow for depth
        overflow: "hidden", // Ensure content doesn't overflow
      }}
    >
      {children}
    </motion.div>
  );
  const HoverBubble: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "90%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        border: "2px solid white",
        borderRadius: "15px",
        padding: "16px",
        marginBottom: "10px",
        zIndex: "500",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "visible", // Allow content to extend outside
      }}
    >
      <Box position="relative" role="group">
        <Heading
          as="h1"
          fontSize="xl"
          color="#fff"
          fontFamily="'SecondaryFont', sans-serif"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          _hover={{ cursor: "pointer" }}
        >
          {title}
        </Heading>
        <Box
          position="absolute"
          top="100%" // Show below the bubble
          left="50%"
          transform="translateX(-50%)"
          bg="rgba(0, 0, 0, 0.9)" // Darker background for readability
          color="#fff"
          fontSize="sm"
          fontFamily="'SecondaryFont', sans-serif"
          borderRadius="10px"
          padding="10px"
          opacity={0}
          visibility="hidden"
          whiteSpace="normal" // Allow text wrapping
          textAlign="center"
          zIndex={10} // Ensure hover text is above all elements
          transition="opacity 0.3s, visibility 0.3s"
          _groupHover={{ opacity: 1, visibility: "visible" }}
        >
          {description}
        </Box>
      </Box>
    </motion.div>
  );

  return (
    <Box
      id="how-to-buy"
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bgImage="/backgrounds/pepe_pyramids.JPG"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {/* Main Title */}
      <Flex mt="10px" width="90%" justifyContent="center" alignItems="center">
      <Bubble>
      <Heading
        as="h1"
        fontSize="4xl"
        color="#fff"
        textAlign="center"
        fontFamily="'PepeFont', sans-serif"
        zIndex={2}
        textShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
      >
       How to Buy Baby Pepe
      </Heading>
      </Bubble>
      </Flex>

      {/* Content Section */}
      <Flex
        width="100%"
        maxWidth="1200px"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap" // Enables stacking on smaller screens
        gap={4}
        mt={5}
      >
        {/* Left Column */}
        <Flex
          flexDirection="column"
          flex={{ base: "1 1 100%", md: "0.4" }}
          maxWidth={{ base: "100%", md: "35%" }}
          justifyContent="center"
          alignItems="center"
          ml={{ base: 0, md: "15%" }}
        >
          <HoverBubble
            title="Create a Wallet + Get some $ETH"
            description="Download a crypto wallet like MetaMask. Buy $ETH on an exchange and transfer it to your wallet."
          />
          <HoverBubble
            title="Click Uniswap Embed"
            description="Use the Uniswap embed here and connect your wallet"
          />
          <HoverBubble
            title="Swap $ETH for $BPEP"
            description="Click the swap button on Uniswap"
          />
        </Flex>

        
        <Flex
          flex={{ base: "1 1 100%", md: "0.6" }}
          maxWidth={{ base: "100%", md: "65%" }}
          justifyContent="center"
          alignItems="center"
          mb={"5px"}
        >
          {!showIframe ? (
            <Image
              src="/images/uniswapOpen.png"
              alt="Open Uniswap Swap"
              width="300px"
              height="510px"
              borderRadius="10px"
              cursor="pointer"
              onClick={handleShowIframe}
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
              style={{
                border: "0",
                borderRadius: "10px",
              }}
            />
          ) : (
            <iframe
              id="uniswap-iframe"
              src="https://app.uniswap.org/#/swap?outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4&chain=mainnet"
              width="300px"
              height="510px"
              style={{
                border: "0",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              title="Uniswap Swap"
            ></iframe>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SwapBabyPepe;
