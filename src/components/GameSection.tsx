"use client";

import { Box, Image } from "@chakra-ui/react";
import Header from "./Header";



const GameSection: React.FC = () => {
  return (
    <>
    <Header/>
    <Box
    id="flappy2"
    bgImage="/images/background-game.png"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    width="100vw"
    minHeight="190vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="relative"
    overflow="hidden"
  >
    <Box
      height="800px"
      width="500px" 
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Iframe Container */}
      <Box
        position="absolute"
        top="58%"
        left="50%"
        width="400px"
        height="630px"
        transform="translate(-50%, -50%)"
        overflow="hidden"
        zIndex={1}
      >
        <iframe
          src="https://flappybabypepe.netlify.app/"
          style={{
            marginTop: "-80px",
            width: "100%",
            height: "100%",
            border: "none",
            overflow: "hidden",
            pointerEvents: "auto",
          }}
          scrolling="no"
          title="Flappy Baby Pepe"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </Box>

      {/* Arcade Machine Image */}
      <Image
        src="/images/game-machine.png"
        alt="Arcade Machine"
        width="auto" // Allow the width to adjust automatically
        height="1700px" // Set a fixed height
        maxWidth="600px" // Prevent resizing beyond this width
        position="absolute"
        top="54%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        pointerEvents="none"
        objectFit="contain" // Ensure it maintains aspect ratio
      />
    </Box>
  </Box>
  </>
  );
};

export default GameSection;
