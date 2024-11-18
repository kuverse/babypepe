"use client";

import { useState } from "react";
import { Box, Grid, GridItem, Heading, Image, IconButton } from "@chakra-ui/react";
import Header from "@/components/Header";
import { FaDownload } from "react-icons/fa";

const initialMemes = [
  { src: "/memes/beach_babypepe.JPG", title: "Beach Baby Pepe" },
  { src: "/memes/big_babypepe.JPG", title: "Big Baby Pepe" },
  { src: "/memes/boysclub_babypepe.JPG", title: "Boysclub Baby" },
  { src: "/memes/crew_babypepe.JPG", title: "Baby Pepe & Crew" },
  { src: "/memes/godzilla_babypepe.PNG", title: "Godzilla Baby" },
  { src: "/memes/halloween_babypepe.JPG", title: "Chucky Baby Pepe" },
  { src: "/memes/lionkin_babypepe.JPG", title: "A King is Born" },
  { src: "/memes/mars_babypepe.JPG", title: "Martain Baby" },
  { src: "/memes/sparta_babypepe.JPG", title: "Sparta Baby" },
  { src: "/memes/starwars_babypepe.JPG", title: "Starwars Baby" },
  { src: "/memes/surf_babypepe.JPG", title: "Surfing Baby Pepe" },
  { src: "/memes/tech_babypepe.JPG", title: "Internet Baby Pepe" },
  { src: "/memes/vote_babypepe.JPG", title: "Political Baby Pepe" },

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
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        bg="#187235" // Green background
      >
        <Heading
          size="2xl"
          mt={"100px"}
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
