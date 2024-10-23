"use client";

import { Box, Image } from "@chakra-ui/react";



const GameSection: React.FC = () => {
  return (
    <Box
    id="flappy2"
    bgImage="/images/background-game.png"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    width="100vw"
    minHeight="150vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="relative"
    overflow="hidden"
  >
    {/* Optional: Use regular Box if no animation needed */}
    <Box
      height="800px" // Fixed height for the motion box
      width="500px" // Fixed width for the motion box
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
        src="/images/arcademachine.png"
        alt="Arcade Machine"
        maxWidth="600px" // Prevent resizing beyond this width
        maxHeight="1200px" // Prevent resizing beyond this height
        position="absolute"
        top="52%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        pointerEvents="none"
        objectFit="contain" // Ensure it maintains aspect ratio
      />
    </Box>
  </Box>
  );
};

export default GameSection;
