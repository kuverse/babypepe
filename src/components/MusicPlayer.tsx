"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
 
  IconButton,
  List,
  ListItem,
  Flex,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
} from "react-icons/fa";

const songs = [
  { id: 1, title: "Song 1", src: "/music/song1.mp3" },
  { id: 2, title: "Song 2", src: "/music/song2.mp3" },
  { id: 3, title: "Song 3", src: "/music/song3.mp3" },
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    // Collapse the player on small screens by default
    setIsExpanded(!isSmallScreen);
  }, [isSmallScreen]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      p={3}
      bg="#156D30"
      color="white"
      borderRadius="10px 10px 0 0"
      boxShadow="lg"
      maxWidth="300px"
      zIndex={1000}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <IconButton
          icon={<FaMusic />}
          aria-label="Expand Player"
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          color="white"
        />
        <Text fontSize="lg" fontWeight="bold">
          Walkman Player
        </Text>
      </Flex>

      {isExpanded && (
        <>
          <audio
            ref={audioRef}
            src={songs[currentSongIndex].src}
            onEnded={handleNext}
          />

          <Text mt={2} fontSize="sm" color="#6CB947">
            Now Playing: {songs[currentSongIndex].title}
          </Text>

          <List mt={3} spacing={2}>
            {songs.map((song, index) => (
              <ListItem
                key={song.id}
                bg={index === currentSongIndex ? "#6CB947" : "gray.700"}
                p={2}
                borderRadius="md"
                cursor="pointer"
                onClick={() => setCurrentSongIndex(index)}
              >
                {song.title}
              </ListItem>
            ))}
          </List>

          <Flex mt={3} justifyContent="space-around">
            <IconButton
              icon={<FaBackward />}
              aria-label="Previous Song"
              onClick={handlePrev}
            />
            <IconButton
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              aria-label="Play/Pause"
              onClick={handlePlayPause}
            />
            <IconButton
              icon={<FaForward />}
              aria-label="Next Song"
              onClick={handleNext}
            />
          </Flex>

          <Flex mt={3} alignItems="center">
            <IconButton
              icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              aria-label="Mute/Unmute"
              onClick={handleMute}
              mr={2}
            />
            <Slider
              value={volume}
              onChange={(val) => setVolume(val)}
              max={100}
              colorScheme="green"
            >
              <SliderTrack bg="gray.600">
                <SliderFilledTrack bg="#6CB947" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default MusicPlayer;
