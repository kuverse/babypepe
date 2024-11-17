"use client";

import React, { useEffect } from "react";
import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { useAnimation, motion, Transition, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";

const transition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
};

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

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
    <Box
      id="tokenomics"
      position="relative"
      width="100vw"
      minHeight="100vh"
      backgroundImage="url('/backgrounds/pepe_surfing.JPG')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      {/* Semi-transparent Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.2)"
        zIndex={1}
      />

      {/* Title */}
      <Heading
        as="h1"
        fontSize="5xl"
        color="#fff"
        textAlign="center"
        fontFamily="'PepeFont', sans-serif"
        zIndex={2}
        textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
      >
       Tokenomics
      </Heading>

      {/* Subtitle */}
      <Text
        mt={4}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="#fff"
        textAlign="center"
        fontFamily="'SecondaryFont', sans-serif"
        zIndex={2}

        textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

      >
        No tax? Feels good man.
      </Text>

      {/* Floating Bubbles */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{
          width: "90%",
          maxWidth: "800px",
          zIndex: 3, // Ensure it's above the overlay
        }}
      >
        <VStack spacing={5} alignItems="center" mt={8}>
          {[
            "Total Supply 420.69B",
            "0% Sell Tax",
            "0% Buy Tax",
            "Liquidity pool burnt",
            "Contract Renounced",
            "Community Takeover",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              animate={{
                y: [0, -10, 0], // Floating animation
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Flex
                bg="rgba(0, 0, 0, 0.5)" // Semi-transparent bubble
                p={4}
                borderRadius="15px"
                border="2px solid white"
                align="center"
                justify="flex-start"
                color="#fff"
                fontSize={{ base: "lg", md: "xl" }}
                fontFamily="'SecondaryFont', sans-serif"
                w="60%"
                maxW="600px"
                textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

              >
                <FaCheck style={{ marginRight: "12px" }} />
                {text}
              </Flex>
            </motion.div>
          ))}
        </VStack>
      </motion.div>
    </Box>
  );
};

export default TokenomicsSection;
