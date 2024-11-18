"use client";

import Header from "@/components/Header";
import { Box, Heading, Image, Text, VStack, Button, Grid, GridItem } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const logos = [
  { src: "/logos/babyPepe_logoname.PNG", name: "Name Logo", download: "/images/pepeicon.png" },
  { src: "/logos/babyPepe.JPG", name: "Main Icon", download: "/images/pepeicon.png" },

];

const MediaKit: React.FC = () => {
  return (
    <>
      <Header />

      <Box
        minHeight="100vh"
        bg="#6CB947"
        p={{ base: 4, md: 10 }} // Responsive padding
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          mt={100}
          as="h2"
          size={{ base: "xl", md: "2xl" }} // Responsive heading size
          textAlign="center"
          fontFamily="'PepeFont', sans-serif"
        >
          Media Kit
        </Heading>

        <VStack spacing={2} mb={8}>
          <Heading as="h2" size={{ base: "md", md: "lg" }} color="#fff" fontFamily="'SecondaryFont', sans-serif">
            Download Brand Assets
          </Heading>
        </VStack>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} // Responsive grid layout
          gap={4} // Reduced gap for mobile
          width={{ base: "90%", md: "80%" }} // Responsive grid width
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
              <Image src={logo.src} alt={logo.name} maxWidth={{ base: "100px", md: "150px" }} mb={3} /> {/* Responsive logo size */}

              <Text
                fontSize={{ base: "sm", md: "lg" }} // Responsive text size
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
