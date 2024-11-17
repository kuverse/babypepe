"use client";

import React, { useEffect } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
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

  return (
    <>

    <Box
    id="roadmap"
    width="100%"
    height="100vh" // Ensures a minimum height for the box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    position="relative"
    overflow="hidden" // Prevents scrolling
    bgImage="/backgrounds/pepe_hiking.JPG"
    backgroundSize="cover" // Use 'cover' to fill the entire container
    backgroundPosition="calc(50% + 35%) center" // Shifts the image 10% to the left
    backgroundRepeat="no-repeat"
    //boxShadow="lg" // Optional: Add some shadow for better visuals
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
          as="h1"
          my={4}
          width={"90%"}
          fontSize="6xl"
          textAlign="center"
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          zIndex={2} 
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Road Map
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
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

        >
          Simple, but effective
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
              "Phase 1: Meme",
              "Phase 2: Vibe and HODL",
              "Phase 3: Meme Takeover",
            
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
                  fontSize={{ base: "25px", md: "30px" }}
                  color="white"
                  p={2}
                  borderRadius="15px"
                  width={"150%"}
                  bg="rgba(0, 0, 0, 0.5)"
                  opacity={0.9}
                  border="2px solid white"
                  textAlign="left"
                  display="flex"
                  alignItems="center"
                  fontFamily="'SecondaryFont', sans-serif"
                  textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

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

export default RoadMapSection;
