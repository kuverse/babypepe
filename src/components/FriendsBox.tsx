"use client";

import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
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
      backgroundImage="/videos/1.png" // Background image
      backgroundSize="cover" // Ensure it covers the box
      backgroundPosition="center" // Center the background image
      paddingY={8} // Padding for vertical spacing
    >
      {/* Title Image */}
      <Image
        src="/images/friends-title.png"
        className={styles.floatingImage}
        alt="Baby Pepe and friends title"
        width={{ base: "60%", md: "50%" }} // Increase width on base and md
        height={{ base: "auto", md: "auto" }} // Maintain aspect ratio
        borderRadius="15px"
        objectFit="contain"
        zIndex={30}
        marginBottom={2} // Space between title and scroller
      />

     

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
          animation="scroll 20s linear infinite"
          position="absolute"
          whiteSpace="nowrap"
          zIndex={1}
        >
          {episodeImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Baby Pepe Episode ${index + 1}`}
              width="120px"
              height="auto"
              display="inline-block"
              borderRadius={"15px"}      
              border="3px solid white"   
              mx={2} 
              objectFit="contain"
              _hover={{ transform: "scale(0.9)", transition: "transform 0.3s" }}
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
          backgroundColor="rgba(0, 0, 0, 0.6)"
          color="white"
          width="92%"
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
