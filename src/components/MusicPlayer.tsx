"use client";

import { useState } from "react";
import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { 
  FaPlay, 
  FaPause, 
  FaRandom, 
  FaVolumeUp, 
  FaMusic 
} from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Box
      bg="gray.900"
      color="white"
      p={4}
      borderRadius="10px"
      width={isExpanded ? "300px" : "50px"}
      height={isExpanded ? "auto" : "50px"}
      display="flex"
      flexDirection={isExpanded ? "column" : "row"}
      alignItems="center"
      justifyContent={isExpanded ? "space-between" : "center"}
      gap={2}
      cursor="pointer"
    >
      {isExpanded ? (
        <>
          <Text>Song Title</Text>
          <Flex gap={2}>
            <IconButton 
              icon={isPlaying ? <FaPause /> : <FaPlay />} 
              onClick={togglePlay} 
              aria-label={isPlaying ? "Pause" : "Play"} 
            />
            <IconButton 
              icon={<FaRandom />} 
              aria-label="Shuffle" 
            />
            <IconButton 
              icon={<FaVolumeUp />} 
              aria-label="Volume" 
            />
          </Flex>
        </>
      ) : (
        <IconButton 
          icon={<FaMusic />} 
          onClick={toggleExpand} 
          aria-label="Expand Music Player" 
        />
      )}
    </Box>
  );
};

export default MusicPlayer;
