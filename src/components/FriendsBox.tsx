"use client";

import React from "react";
import { Box, Heading, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '../styles/landingpage.module.css';

const FriendsBox: React.FC = () => {
  // Array of images for the episodes
  const episodeImages = [
    "/videos/1.png",
    "/videos/2.png",
    "/videos/3.png",
    "/videos/4.png",
    "/videos/5.png",
    "/videos/6.png",
    "/videos/7.png",
    "/videos/8.png",
    "/videos/00.png",
    "/videos/1.png",
    "/videos/2.png",
    "/videos/3.png",
    "/videos/4.png",
    "/videos/5.png",
    "/videos/6.png",
    "/videos/7.png",
    "/videos/8.png",
    "/videos/00.png",
  ];


  return (
    <Box
      id="friends"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      mt={-5}
      minHeight="100vh" // Ensures the content scales with the height
      textAlign="center" // Center align text and children
      backgroundImage="/images/background003.png" // Background image
      backgroundSize="cover" // Ensure it covers the box
      backgroundPosition="center" // Center the background image
      paddingY={8} // Padding for vertical spacing
    >
      {/* Title Image */}
      <Image
        src="/images/friends-title.png"
        className={styles.floatingImage}
        alt="friends title"
        width={{ base: "60%", md: "50%" }} // Increase width on base and md
        height={{ base: "auto", md: "auto" }} // Maintain aspect ratio
        borderRadius="15px"
        objectFit="contain"
        zIndex={30}
        marginBottom={2} // Space between title and scroller
      />

      <Heading
        as="h1"
        mt={-20}
        mb={10}
        width={"80%"}
        fontSize={{ base: "35px", md: "40px" }}
        textAlign="center"
        color="#156D30"
        fontFamily="'SecondaryFont', sans-serif"
        textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
      >
        The Animated Series
      </Heading>

      {/* Scrolling Image Reel */}
      <Box
        position="relative"
        overflow="hidden"
        width="100%"
        height="120px"
      >
        <Box
          as={motion.div}
          display="flex"
          animation="scroll 30s linear infinite"
          position="absolute"
          whiteSpace="nowrap"
          zIndex={1}
        >
          {episodeImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Episode ${index + 1}`}
              width="120px" // Adjust width as needed
              height="auto"
              display="inline-block"
              borderRadius={"15px"}

              mx={2} // Margin between images
              objectFit="contain"
              _hover={{ transform: "scale(1.1)", transition: "transform 0.3s" }}
            />
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        padding={12}
        justifyContent="center" // Center horizontally
        width="80%" // Full width
        mt={5}
        zIndex={2}
      >
        <Link
          href="/baby-pepe-and-friends"
          fontWeight="bold"
          fontSize={{ base: "30px", md: "40px" }}
          bg="#6CB947"
          color="white"
          width="80%"
          maxW="400px" // Limit the maximum width
          height="auto" // Set height to auto
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          textAlign="center"
          border="4px solid white"
          _hover={{ bg: "#156D30", transform: "scale(1.05)", transition: "transform 0.3s" }} // Hover effect
        >
          <Box paddingTop={4} paddingBottom={4} textAlign="center"> {/* Added Box for padding */}
            Watch
          </Box>
        </Link>

       
      </Box>


  
      <Image
        src="/images/pepebottle.png"
        alt="friends title"
        width={{ base: "75%", md: "40%" }} // Increase width on base and md
        height={{ base: "auto", md: "auto" }} // Maintain aspect ratio
        borderRadius="15px"
        zIndex={30}
        marginTop={5}
        filter="brightness(1.2) contrast(1.3)"
      />


      {/* Keyframes for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default FriendsBox;
