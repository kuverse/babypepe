"use client";

import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BubbleChart from "./StackedLogos";

// Bubble Component with Scroll Animation
const Bubble: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates once when in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
};

const AboutBox: React.FC = () => {
  return (
    <Box
      id="about"
      position="relative"
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding={4}
      textAlign="center"
      backgroundImage="url('/backgrounds/pepe_skiing.JPG')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Title Bubble */}
      <Box width="100%" maxWidth="1200px" mb={4}>
        <Bubble>
          <Heading
            as="h1"
            fontSize="4xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
          >
            About 0x69babe
          </Heading>
        </Bubble>
      </Box>

      {/* Address Bubble */}
      <Box width="100%" maxWidth="1200px" mb={4}>
        <Bubble>
          <Heading
            as="h1"
            fontSize="3xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
          >
            Contract Address
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "16px", md: "1.6vw" }}
            color="#fff"
            fontFamily="'SecondaryFont', sans-serif"
          >
            0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4
          </Heading>
        </Bubble>
      </Box>

      {/* Responsive Bubbles */}
      <Flex
        width="100%"
        maxWidth="1200px"
        justifyContent="space-between" // Space evenly for side-by-side layout
        flexWrap="wrap" // Allows wrapping on smaller screens
        gap={4}
      >
        <Box flex={{ base: "1 1 100%", md: "1" }} maxWidth={{ base: "100%", md: "48%" }}>
          <Bubble>
            <Heading
              as="h1"
              fontSize="3xl"
              color="#fff"
              fontFamily="'PepeFont', sans-serif"
            >
              Make room for BabyPepe!
            </Heading>
            <Text
              fontSize={{ base: "2.5vh", md: "2vh" }}
              color="#fff"
              fontFamily="'SecondaryFont', sans-serif"
              textAlign="center"
            >
              Babypepe, heir to the throne and son of Pepe, represents the dawn
              of a new generation in the frog kingdom.
            </Text>
          </Bubble>
        </Box>
        <Box flex={{ base: "1 1 100%", md: "1" }} maxWidth={{ base: "100%", md: "48%" }}>
          <Bubble>
            <Heading
              as="h1"
              fontSize="3xl"
              color="#fff"
              fontFamily="'PepeFont', sans-serif"
            >
              Like father, Like son
            </Heading>
            <Text
              fontSize={{ base: "2.5vh", md: "2vh" }}
              color="#fff"
              fontFamily="'SecondaryFont', sans-serif"
              textAlign="center"
            >
              The Babypepe narrative is simple. A community of dedicated
              individuals ensures the success of this adorable little frog.
            </Text>
          </Bubble>
        </Box>
      </Flex>
      <Box width="100%" maxWidth="1200px" mb={4}>
        <Bubble>
          <Heading
            as="h1"
            fontSize="3xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
          >
            Baby Pepes Useful Links
          </Heading>
          <BubbleChart />
        </Bubble>
      </Box>
    </Box>
  );
};

export default AboutBox;
