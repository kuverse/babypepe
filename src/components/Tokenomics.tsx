"use client";

import React, { useEffect } from "react";
import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { useAnimation, motion, Transition, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa"; // Import the checkmark icon

const transition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
};

// Wrapper variants with staggerChildren for staggered animations
const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

// Individual item animation variants
const itemVariants: Variants = {
  visible: { opacity: 1, y: 0, transition },
  hidden: { opacity: 0, y: 50 },
};

const TokenomicsSection: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <>
      <Box
        id="tokenomics"
        position="relative" // Set to relative for proper positioning
        backgroundSize="contain" // Change to fit the background correctly
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="90%"
        height={"70%"}
        backgroundColor="#006821"
        minHeight="80vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        p={10}
        border="2px solid white"
        borderRadius={10}
        mb={5}
        mt={10}
        bgImage="/images/output.gif"
        boxShadow="lg" // Shadow for depth

         // Ensure correct background image
      >
       
       <Flex 
        position={"absolute"} 
        right={{ base: 2, md: "30%" }} // Use different positioning for base and md (medium) screens
        top={{base: 380, md: 280}} 
        transform={{ base: "none", md: "translateX(80%)" }} // Center the image horizontally on larger screens
        zIndex={2} // Keep it above other elements
      >
        <Image
          src="/images/notax.png" // Replace with your image path
          alt="no taxes"
          width="160px"
          height="180px"
        />
      </Flex>


        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.2)" // Semi-transparent overlay
          borderRadius={10} // Match the border radius of the main box
          zIndex={1} // Make sure overlay is behind the content but in front of the background
        />
        
        <Heading
          as="h1"
          my={4}
          width={"90%"}
          fontSize="5xl"
          textAlign="center"
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          zIndex={2} 
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

        >
          Tokenomics
        </Heading>


        <Text
          mb={4}
          fontSize={{ base: "3xl", md: "30px" }}
          textAlign="center"
          color="#fff"
          fontWeight={"bold"}
          fontFamily="'SecondaryFont', sans-serif"
          //textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
          zIndex={2} // Bring text above the overlay
        >
          Solid financial structure
        </Text>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ width: "75%", maxWidth: "400px" , zIndex: 2 }} // Limit text bars to 75% width
        >
          <VStack spacing={5} alignItems="center" mt={4} mb={4}>
            {[
              "Total Supply 420.69B",
              "0% Sell Tax",
              "0% Buy Tax",
              "Liquidity pool roasted.",
              "Contract Renounced.",
              "Community Takeover"
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  width: "120%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Text
                  fontSize={{ base: "30px", md: "30px" }}
                  color="white"
                  p={2}
                  borderRadius="15px"
                  width={"150%"}
                  bg="rgba(0, 0, 0, 0.7)"
                  opacity={0.9}
                  border="2px solid white"
                  textAlign="left"
                  display="flex"
                  alignItems="center"
                  fontFamily="'SecondaryFont', sans-serif"
                >
                  <FaCheck style={{ marginRight: "18px", color: "white", marginLeft: "15px" }} />
                  {text}
                </Text>
              </motion.div>
            ))}
          </VStack>
        </motion.div>
      </Box>
    </>
  );
};

export default TokenomicsSection;
