"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  const videos = [
    {
      thumbnail: "/videos/1.png",
      title: "Episode 1: Breaking!",
      embedUrl: "https://www.youtube-nocookie.com/embed/RJozyBRMTb8?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/2.png",
      title: "Episode 2: Hit the Road",
      embedUrl: "https://www.youtube-nocookie.com/embed/yRVM9_-vVSM?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/3.png",
      title: "Episode 3: The Chase",
      embedUrl: "https://www.youtube-nocookie.com/embed/5JJlgFrGKCA?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/4.png",
      title: "Episode 4: Beefy Intel",
      embedUrl: "https://www.youtube-nocookie.com/embed/pOmgky5QYKI?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/5.png",
      title: "Episode 5: Blue Bird",
      embedUrl: "https://www.youtube-nocookie.com/embed/IswxDs9Rb2c?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/6.png",
      title: "Episode 6: Drop a Baby",
      embedUrl: "https://www.youtube-nocookie.com/embed/Zfl7oCxORg4?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/7.png",
      title: "Episode 7: To the Moon",
      embedUrl: "https://www.youtube-nocookie.com/embed/Mi6FXTCQLQE?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
    {
      thumbnail: "/videos/8.png",
      title: "Episode 8: The Catch",
      embedUrl: "https://www.youtube-nocookie.com/embed/52GQXbIczBE?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
    },
  ];

  const handleVideoClick = (video: { embedUrl: string; title: string }) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />

      <Box display="flex" flexDirection="column" height="100vh" width="100vw">
        {/* Top Section with Background Image */}
        <Box
          flex="1"
          backgroundImage="/images/background-image.png"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="40px"
          fontFamily="'PepeFont', sans-serif"
        >
          <Heading
            as="h1"
            size="4xl"
            color="#6CB947"
            textAlign="center"
            textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
            mb={2}
            fontFamily="'PepeFont', sans-serif"
            mt={100}
          >
            Baby Pepe & Friends
          </Heading>

          <Text fontSize="3xl" color="#fff" textAlign="center" mb={8} fontFamily="'SecondaryFont', sans-serif">
            Watch the latest episodes and discover the adventures of Baby Pepe!
          </Text>

          {/* Video Thumbnails Row */}
          <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap" marginBottom="30px">
            {videos.map((video, index) => (
              <Box key={index} onClick={() => handleVideoClick(video)} cursor="pointer" textAlign="center" _hover={{ transform: "scale(1.4)" }}>
                <Image
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  width="150px"
                  height="100px"
                  objectFit="cover"
                  borderRadius="8px"
                  mb={2}
                />
                <Text fontWeight="bold" color="#fff">
                  {video.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Section for Selected Video */}
        <Box flex="1" backgroundColor="black" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="20px" >
          {selectedVideo && (
            <>
              {/* Video Title */}
              <Text mt={10} fontSize="2xl" fontWeight="bold" color="white" marginBottom="10px">
                {selectedVideo.title}
              </Text>

              {/* YouTube Embed Player */}
              <Box position="relative" width="100%" height="0" paddingBottom="56.25%" mb={100}>{/* 16:9 Aspect Ratio */}
                <iframe
                  src={selectedVideo.embedUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onError={() => alert("An error occurred while loading the video.")}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
                    marginBottom: "25px",
                  }}
                ></iframe>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default VideoGallery;
