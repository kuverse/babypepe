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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent darker background
        border: "2px solid white", // White border
        borderRadius: "15px",
        padding: "12px",
        margin: "4px 0", // Consistent vertical spacing
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
      backgroundPosition="calc(50% + 20%) center" // Shifts the image 10% to the left
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Title Bubble */}
      <Box width="70%" maxWidth="500px" mb={4}>
        <Bubble>
          <Heading
            as="h2"
            fontSize="4xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

          >
            About Baby Pepe
          </Heading>
        </Bubble>
      </Box>

      {/* Address Bubble */}
      <Box width="70%" maxWidth="500px" mb={4}>
        <Bubble>
          <Heading
            as="h2"
            fontSize="3xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

          >
            Contract Address
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "16px", md: "1.6vw" }}
            color="#fff"
            fontFamily="'SecondaryFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

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
              as="h2"
              fontSize="3xl"
              color="#fff"
              fontFamily="'PepeFont', sans-serif"
              textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

            >
              Make room for BabyPepe!
            </Heading>
            <Text
              fontSize={{ base: "2.5vh", md: "2vh" }}
              color="#fff"
              fontFamily="'SecondaryFont', sans-serif"
              textAlign="center"
              textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

            >
              Babypepe, heir to the throne and son of  Pepe, represents the dawn of a new generation in the frog kingdom, and a passing of the baton, from one generation to the next.  Signifying the rite of passage bestowed upon a son by his father, Babypepe strives to build and improve upon his dad&apos;s legacy.
              Pepe, the king of memes and a viral sensation found all over the internet, has taken the world by storm, and captivated the hearts of many.  If you missed Pepe&apos;s parabolic run, Babypepe is an opportunity to be a part of something bigger than yourself, and have a hand in building a community that will surely go down in memecoin history.
              With Pepe being found in every corner of the globe, it&apos;s only a matter of time before Babypepe makes his mark on the world!

            </Text>
          </Bubble>
        </Box>
        <Box flex={{ base: "1 1 100%", md: "1" }} maxWidth={{ base: "100%", md: "48%" }}>
          <Bubble>
            <Heading
              as="h2"
              fontSize="3xl"
              color="#fff"
              fontFamily="'PepeFont', sans-serif"
              textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

            >
              Like father, Like son
            </Heading>
            <Text
              fontSize={{ base: "2.5vh", md: "2vh" }}
              color="#fff"
              fontFamily="'SecondaryFont', sans-serif"
              textAlign="center"
              textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

            >
              The Babypepe narrative is simple.  Son of pepe, whos CA starts with 0x69, Babypepe boasts a unique vanity contract address similiar to that of his father, starting with 0x69babe.  A CTO, by the people, for the people, was forged back in May of 2024, with no shortage of obstacles in its path.  A community of diamond handed, cult like chads, have defeated two cabal launches, dethroned a serial scammer crypto twitter influencer, and built an oarganic following of dedicated indvidiuals who are comittted to the growth and success of this adorable little frog.
              Come stop by our telegram, checkout the twitter, and see for yourself.  With a foundation of integrity, honesty, kindness, and compassion, everyone is valued and has a seat at the table in our community.
            </Text>
          </Bubble>
        </Box>
      </Flex>
      <Box width="100%" maxWidth="500px" mt={4}>
        <Bubble>
          <Heading
            as="h2"
            fontSize="3xl"
            color="#fff"
            fontFamily="'PepeFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          >
            Baby Pepe&apos;s Useful Links
          </Heading>
          <BubbleChart />
        </Bubble>
      </Box>
    </Box>
  );
};

export default AboutBox;
