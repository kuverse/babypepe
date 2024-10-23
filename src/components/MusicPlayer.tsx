"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeMute, FaMusic } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";

const songs = [
  { id: 1, title: "The Original Baby", src: "/music/1.mp3" },
  { id: 2, title: "Baby Pepe & Friends", src: "/music/2.mp3" },
  { id: 6, title: "The Pepe DNA", src: "/music/6.mp3" },
  { id: 3, title: "A Brand New Vibe", src: "/music/3.mp3" },
  { id: 4, title: "Crypto Craze", src: "/music/4.mp3" },
  { id: 5, title: "There's a New King", src: "/music/5.mp3" },
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    setIsExpanded(!isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => setCurrentTime(audio?.currentTime || 0);
    const setAudioDuration = () => setDuration(audio?.duration || 0);

    if (audio) {
      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", setAudioDuration);
      audio.load(); // Ensure the new song loads correctly
      if (isPlaying) {
        audio.play(); // Start playing the new song if currently playing
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", setAudioDuration);
      }
    };
  }, [currentSongIndex]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length); // Update the song index
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const handlePlay = (index: number) => {
    setCurrentSongIndex(index); // Set the song index
  };

  const handleMute = () => {
    const audio = audioRef.current;
    if (audio) audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScrub = (value: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = value;
      setCurrentTime(value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box
      position="fixed"
      bottom={10}
      left={10}
      p={2}
      bg="#156D30"
      color="white"
      borderRadius="15px"
      boxShadow="lg"
      maxWidth={isExpanded ? "420px" : "60px"}
      transition="max-width 0.3s"
      zIndex={1000}
      border="2px solid white"
    >
      {isExpanded && (
        <Image
          src="/images/pepegif.gif"
          alt="Music Animation"
          position="absolute"
          top="-75px"
          left="10px"
          width="200px"
          height="170px"
          zIndex={-5}
          pointerEvents="none"
          style={{
            filter: 'brightness(1.2) contrast(1.3)',
          }}
        />
      )}

      <Flex justifyContent="space-between" alignItems="center" onClick={() => setIsExpanded((prev) => !prev)}>
        <IconButton
          icon={<FaMusic size={30} />}
          aria-label="Expand Player"
          variant="ghost"
          color="white"
        />
        {isExpanded && <ChevronDownIcon boxSize={10} zIndex={-6} />}
      </Flex>

      <audio 
        ref={audioRef} 
        src={songs[currentSongIndex].src} 
        onEnded={handleNext} 
        preload="auto" // Ensure the next song is preloaded
      />

      {isExpanded && (
        <>
          <List mt={3} spacing={2} mx={3} maxHeight="120px" overflowY="auto" backgroundColor={"#156D30"}>
            {songs.map((song, index) => (
              <ListItem
                key={song.id}
                bg={index === currentSongIndex ? "#6CB947" : "#CBCBD2"}
                p={1}
                borderRadius="md"
                cursor="pointer"
                onClick={() => handlePlay(index)}
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                fontFamily="'SecondaryFont', sans-serif"
                fontSize="20px"
                fontWeight={"bold"}
              >
                {song.title}
              </ListItem>
            ))}
          </List>

          <Flex mt={3} alignItems="center">
            <Text fontSize="sm" color="white" mx={2}>
              {formatTime(currentTime)}
            </Text>
            <Slider value={currentTime} min={0} max={duration} onChange={handleScrub} width="70%">
              <SliderTrack bg="gray.600">
                <SliderFilledTrack bg="#6CB947" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm" color="white" mx={2}>
              {formatTime(duration)}
            </Text>
          </Flex>

          <Flex mt={2} justifyContent="space-around">
            <IconButton mt={2} icon={<FaBackward />} aria-label="Previous Song" onClick={handlePrev} />

            <IconButton
              icon={isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
              aria-label="Play/Pause"
              onClick={handlePlayPause}
              bg="#6CB947"
              borderRadius="50%"
              boxSize="60px"
              color="white"
              border="2px solid white"
              _hover={{ bg: "#A5E07B" }}
            />
            <IconButton mt={2} icon={<FaForward />} aria-label="Next Song" onClick={handleNext} />
          </Flex>

          <Flex mt={3} alignItems="center" ml={"15px"}>
            <IconButton
              icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              aria-label="Mute/Unmute"
              onClick={handleMute}
              bg="#transparent"
            />
            <Slider value={volume} onChange={(val) => setVolume(val)} max={100} colorScheme="green" ml={"10px"} width={"60%"}>
              <SliderTrack bg="gray.600">
                <SliderFilledTrack bg="#6CB947" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
          {isExpanded && (
            <Text fontWeight="bold" textAlign="center" flex={1} mx={15} fontSize={"25px"}>
              Walkbaby Player
            </Text>
          )}
        </>
      )}
    </Box>
  );
};

export default MusicPlayer;
