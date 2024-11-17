"use client";

import { Box, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";

const JoinSection: React.FC = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");


  return (
    
    <Box
      id="join-us"
      width="100%"
      height="110vh" // Ensures a minimum height for the box
      display="flex"
      mb={2}
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden" // Prevents scrolling
      bgImage={"/backgrounds/pepe_campfire.JPG"}
      backgroundSize="cover" // Use 'cover' to fill the entire container
      backgroundPosition="center" // Center the image
      backgroundRepeat="no-repeat"
      //boxShadow="lg" // Optional: Add some shadow for better visuals
    >

      <Flex
        direction={isSmallScreen ? "column" : "row"}
        align="center"
        justify="center"
      >
   

        <Flex
          direction="column"
          justifyContent="center"
          textAlign={isSmallScreen ? "center" : "left"}
        >
          <Text
            fontSize={{ base: "50px", md: "60px" }}
            fontWeight="bold"
            color="#fff"
            mb={1}
            textAlign="center"
            fontFamily="'PepeFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          >
            Everyone is Welcome
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "30px" }}
            color="white"
            mb={6}
            textAlign="center"
            fontFamily="'SecondaryFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

          >
            Join the community
          </Text>
          <Flex justifyContent="center" alignItems="center" mb={10}>

          <Button
            as="a"
            href="https://t.me/BabyPepeGo"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="white"
            width="90%"
            padding="30px 40px"
            borderRadius="8px"
            justifyContent={"center"}
            fontSize="25px"
            cursor="pointer"
            transition="all 0.3s"
            my={2}
            border="4px solid white"
            fontFamily="'SecondaryFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
            _hover={{ transform: "scale(1.1)", backgroundColor: "#006821" }}
          >
            <FaTelegram size={30} style={{ marginRight: "10px" }} />
            Join Us
          </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default JoinSection;
