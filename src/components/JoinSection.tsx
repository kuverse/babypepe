"use client";

import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";

const JoinSection: React.FC = () => {

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
    >
      {/* Text Section */}
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start" 
        textAlign={"center"}
        height="70%"
        paddingTop={12} // Adjust height for proper placement
      >
        <Text
          fontSize={{ base: "50px", md: "60px" }}
          fontWeight="bold"
          color="#fff"
          mb={1}
          textAlign="center"
          fontFamily="'PepeFont', sans-serif"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          mt={30} // Add margin-top to move higher
        >
          Everyone is Welcome
        </Text>
      </Flex>

      {/* Button Section */}
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="30%" // Allocate remaining height for the button
        mt={10} // Add margin-top to create separation
      >
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
          border="4px solid white"
          maxW={"300px"}
          fontFamily="'SecondaryFont', sans-serif"
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          _hover={{ transform: "scale(1.1)", backgroundColor: "#006821" }}
        >
          <FaTelegram size={30} style={{ marginRight: "10px" }} />
          Join Us
        </Button>
      </Flex>
    </Box>
  );
};

export default JoinSection;
