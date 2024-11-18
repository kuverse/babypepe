"use client";

import React, { useEffect } from "react";
import { Box, Heading, Text, VStack, Spinner, Grid, GridItem } from "@chakra-ui/react";
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

const RoadMapSection: React.FC = () => {
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

  const phases = [
    {
      title: "Phase 1:",
      points: [
        "Be born ",
        "1000+ Holders ",
        "DEX listings ",
        "Begin to form Cult ",
      ],
    },
    {
      title: "Phase 2:",
      points: [
        "BabyPepe.com",
        "CEX Listings",
        "Tier 1 Listings",
        "10,000+ Holders",
      ],
    },
    {
      title: "Phase 3:",
      points: ["#1 Baby Meta", "50,000+ Holders"],
    },
    {
      title: "Phase 4: Future Growth",
      points: ["100,000 Holders", "Make Dad Proud"],
    },
  ];

  return (
    <>
      <Box
        id="roadmap"
        width="100%"
        height="100vh" // Use 100vh to take up the full viewport height
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden" // Prevents scrolling
        bgImage="/backgrounds/pepe_hiking.JPG"
        backgroundSize="cover" // Use 'cover' to fill the entire container
        backgroundPosition="calc(50% + 45%) center" // Shifts the image 10% to the left
        backgroundRepeat="no-repeat"
      >
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
          as="h2"
          my={4}
          width="90%"
          fontSize="4xl" // Slightly smaller font size to fit within screen
          textAlign="center"
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          zIndex={2}
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Baby Pepe Road Map
        </Heading>

{/*}
        <Text
          mb={4}
          fontSize={{ base: "2xl", md: "24px" }} // Smaller text for the description
          textAlign="center"
          color="#fff"
          fontWeight={"bold"}
          fontFamily="'SecondaryFont', sans-serif"
          zIndex={2} // Bring text above the overlay
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Simple, but effective
        </Text>
*/}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{
            width: "90%", // Adjusted width for better fit
            maxWidth: "900px", // Adjust max width for better fit
            zIndex: 2,
          }} // Limit text bars to 75% width
        >
          <Grid
            templateColumns="repeat(2, 1fr)" // 2 columns for a 2x2 grid layout
            gap={6}
            justifyItems="center"
            mt={4}
            mb={4}
            zIndex={2}
            width="100%"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // Center the bubbles
                  width: "100%", // Ensure each bubble fits within the grid cell
                }}
              >
                {/* Bubble with title and points inside */}
                <Box
                  fontSize={{ base: "20px", md: "22px" }} // Adjusted font size for smaller bubbles
                  color="white"
                  p={4}
                  fontWeight={"bold"}
                  borderRadius="15px"
                  width="100%" // Ensure bubble takes full width of container
                  maxWidth="380px" // Limit bubble size
                  bg="rgba(0, 0, 0, 0.5)"
                  opacity={0.9}
                  border="2px solid white"
                  textAlign="left"
                  display="flex"
                  flexDirection="column" // Arrange title and points vertically
                  alignItems="flex-start"
                  fontFamily="'SecondaryFont', sans-serif"
                  textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
                >
                  {phase.title}

                  {/* Points inside the same bubble */}
                  <VStack spacing={2} mt={4} alignItems="flex-start">
                    {phase.points.map((point, idx) => (
                      <Box key={idx} color="white" fontSize="16px" display="flex" alignItems="center">
                        {/* Display FaCheck for Phase 1 points */}
                        {index === 0 ? (
                          <FaCheck style={{ marginRight: "8px", color: "#fff" }} />
                        ) : (
                          <Spinner size="sm" color="white" style={{ marginRight: "8px" }} />
                        )}
                        {point}
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default RoadMapSection;
