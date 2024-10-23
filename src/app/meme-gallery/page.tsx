"use client";

import { useRef, useState } from "react";
import { Box, Grid, GridItem, Heading, Image, IconButton } from "@chakra-ui/react";
import Header from "@/components/Header";
import { FaDownload } from "react-icons/fa"; // Download icon from react-icons

const initialMemes = [
  { src: "/images/IMG_4155.jpg", title: "Pepe 1" },
  { src: "/images/pepep2.png", title: "Pepe 2" },
  { src: "/images/business-pepe.png", title: "Pepe 3" },
  { src: "/images/cool-pepe.gif", title: "Pepe 4" },
  { src: "/images/pepegif.gif", title: "Pepe 5" },
  { src: "/images/pepe-bull.gif", title: "Pepe 6" },

];




const MemeGallery: React.FC = () => {
  const [memes] = useState(initialMemes);

  const handleDownload = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "meme.png";
    link.click();
  };

  return (
    <>
      <Header />
      <Box
        p={8}
        mt={100} // Add space between header and content
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        bg="#187235" // Green background
      >
        <Heading
          size="2xl"
          mb={8}
          color="white"
          fontFamily="'PepeFont', sans-serif"
        >
          Meme Gallery
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          width="100%"
          maxWidth="1200px"
        >
          {memes.map((meme, index) => (
            <GridItem
              key={index}
              borderRadius="10px"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              position="relative"
            >
              <Image
                src={meme.src}
                alt={meme.title}
                width="100%"
                height="auto"
                objectFit="cover"
              />

              <Box
                p={2}
                position="absolute"
                bottom={0}
                width="100%"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                textAlign="center"
                fontFamily="'SecondaryFont', sans-serif"
              >
                {meme.title}
              </Box>

              <IconButton
                aria-label="Download Meme"
                icon={<FaDownload />}
                size="sm"
                backgroundColor={"#6CB947"}
                position="absolute"
                top={2}
                right={2}
                onClick={() => handleDownload(meme.src)}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MemeGallery;
