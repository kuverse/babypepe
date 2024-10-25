"use client";

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Bubble: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      width: "100%",
      maxWidth: "700px", // Max width for each bubble
      backgroundColor: "#006821", // Darker transparent background
      border: "2px solid white", // White border
      borderRadius: "15px",
      padding: "16px",
      margin: "10px", // Space between bubbles
      boxShadow: "lg", // Optional shadow for depth
    }}
  >
    {children}
  </motion.div>
);

const AboutBox: React.FC = () => {
  return (
    <Box
      id="about"
      width="90%"
      maxWidth="1200px" // Limit max width for better layout
      minHeight="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#6CB947" // Matching background color
      padding={8}
      margin="0 auto" // Center the box in the middle of the page
      textAlign="center"
      border="2px solid white" // Matching border style
      borderRadius="15px" // Rounded corners
      boxShadow="lg" // Shadow for depth
    >
      <Bubble>
        <Heading
          as="h1"
          fontSize="4xl"
          color="#fff"
          marginTop={2}
          fontFamily="'PepeFont', sans-serif"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          About 0x69babe
        </Heading>
      </Bubble>

      <Bubble>
        <Heading
          as="h2"
          fontSize={{ base: "2.2vw", md: "2vw" }}
          color="#fff"
          marginBottom={1}
          fontFamily="'SecondaryFont', sans-serif"
        >
          0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4
        </Heading>
      </Bubble>

      <Bubble>
        <Box
          display="flex"
          justifyContent="center"
          mb={2}
        >
          <Image
            src="/images/cool-pepe.gif"
            alt="cool pepe"
            width={{ base: "60%", md: "40%" }} // Adjust size for responsiveness
            borderRadius="15px"
            objectFit="contain"
            style={{
              filter: 'brightness(1.2) contrast(1.3)',
            }}
          />
        </Box>
        <Box
            display="flex" // Make the parent a flex container
            justifyContent="center" // Center child elements horizontally
            width="100%" // Full width for the Box
          >
        <Text
          fontSize={{ base: "5vw", md: "3vw" }}
          color="#fff" // Darker text color for readability
          marginBottom={4}
          fontFamily="'SecondaryFont', sans-serif"
          width="80%"
          textAlign={"center"}
          justifyContent={"center"}
        >
          All the whales will come to know that Baby Pepe is the ultimate cultural narrative. The <strong>0x69babe</strong> contract address guarantees authenticity. We are the original. Its in the DNA.
        </Text>
        </Box>
      </Bubble>
    </Box>
  );
};

export default AboutBox;
