"use client";

import Header from "@/components/Header";
import { Box, Heading, Image, Text, VStack, Button, Grid, GridItem } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const logos = [
  { src: "/images/pepeicon.png", name: "Circle Profile Green", download: "/images/pepeicon.png" },
  { src: "/images/white-circle-logo.png", name: "Circle Profile White", download: "/images/white-circle-logo.png" },
  { src: "/images/xcircle-logo.png", name: "Circle Profile Main", download: "/images/xcircle-logo.png" },
  { src: "/images/xbanner-yellow.png", name: "Yellow Banner", download: "/images/xbanner-yellow.png" },
  { src: "/images/xbanner-red.png", name: "Red Banner", download: "/images/xbanner-red.png" },
  { src: "/images/banner.png", name: "Green Banner", download: "/images/banner.png" },
  { src: "/images/banner-circle.png", name: "Green Circle Banner", download: "/images/banner-circle.png" },
  { src: "/images/main-logo-green.png", name: "Main Logo Green", download: "/images/main-logo-green.png" },
  { src: "/images/logo-main.png", name: "Main Logo White", download: "/images/logo-main.png" },
];

const MediaKit: React.FC = () => {
  return (
<>

    <Header />

    <Box
      minHeight="100vh"
      bg="#6CB947"
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        mt={100}
        as="h1"
        size="2xl"
        textAlign="center"
        fontFamily="'PepeFont', sans-serif"
      >
        Media Kit
      </Heading>
      
      <VStack spacing={4} mb={8}>
        <Heading as="h2" size="lg" color="#fff" fontFamily="'SecondaryFont', sans-serif"
        >
          Download Brand Assets
        </Heading>
      </VStack>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={8}
        width="80%"
      >
        {logos.map((logo, index) => (
          <GridItem
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            bg="white"
            borderRadius="15px"
            boxShadow="lg"
            p={4}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image src={logo.src} alt={logo.name} maxWidth="150px" mb={3} />

            <Text
              fontSize="lg"
              fontWeight="bold"
              fontFamily="'PepeFont', sans-serif"
              mb={2}
            >
              {logo.name}
            </Text>

            <Button
              as="a"
              href={logo.download}
              download
              leftIcon={<FaDownload />}
              colorScheme="green"
              size="sm"
              variant="outline"
            >
              Download
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default MediaKit;
