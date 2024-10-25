"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SwapBabyPepe: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // Prevent default focus behavior on the iframe
    const iframe = document.getElementById('uniswap-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.tabIndex = -1; // Set tabIndex to -1 to prevent focus
    }

    // Add event listener to prevent scrolling to iframe
    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("scroll", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", preventScroll);
    };
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
        width: "80%",
        maxWidth: "400px", // Max width for each bubble
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Darker transparent background
        border: "2px solid white", // White border
        borderRadius: "15px",
        padding: "16px",
        marginBottom: "5px",
        textAlign: "center",
        margin: "10px", // Space between bubbles
        boxShadow: "lg", // Optional shadow for depth
      }}
    >
      {children}
    </motion.div>
  );


  return (
    <Box
      id="how-to-buy"
      width="90%"
      height="100vh" // Ensures a minimum height for the box
      display="flex"
      mb={2}
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden" // Prevents scrolling
      marginTop="5px"
      borderRadius="15px"
      bg="#156D30" 
      border="2px solid white"
      bgImage={"/images/greenUniswap.png"}
      backgroundSize="cover" // Use 'cover' to fill the entire container
      backgroundPosition="center" // Center the image
      backgroundRepeat="no-repeat"
      //boxShadow="lg" // Optional: Add some shadow for better visuals
    >


    <Bubble>
        <Flex direction={"column"}  justifyContent="center"
      alignItems="center">
        <Image
          src="/logos/uniswap-white.png" // Replace with your image path
          alt="Open Uniswap Swap"
          width="70px"
          height="70px"
          mt={2}
        />
        <Heading
          as="h1"
          fontSize="4xl"
          color="#fff"
          marginTop={5}
          ml={2}
          fontFamily="'PepeFont', sans-serif"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Swap Baby Pepe
        </Heading>
        </Flex>
      </Bubble>

      

      {!showIframe ? (
        <Image
          src="/images/uniswapOpen.png" // Replace with your image path
          alt="Open Uniswap Swap"
          mt={3}
          mb={5}
          width="300px"
          height="510px"
          borderRadius="15px"
          cursor="pointer"
          onClick={handleShowIframe} // Show iframe on click
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }} // Scale effect on hover
        />
      ) : (
        <iframe
          id="uniswap-iframe"
          src="https://app.uniswap.org/#/swap?outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4&chain=mainnet"
          width="300px"
          height="510px"
          style={{
            border: "0",
            borderRadius: "15px",
            overflow: "hidden",
            marginTop: "3px",
            marginBottom: "5px"
          }}
          title="Uniswap Swap"
        ></iframe>
      )}
    </Box>
  );
};

export default SwapBabyPepe;
