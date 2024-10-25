"use client";

import { Box, Flex, Text, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";

const JoinSection: React.FC = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");


  return (
    <Box
      backgroundImage="/images/background-image.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius={10}
      border="2px solid white"
      padding={5}
      boxShadow="lg"
      mb={20}
      width="90%"
      maxWidth="1200px"
      mx="auto"
      position="relative"
    >
      <Flex
        direction={isSmallScreen ? "column" : "row"}
        align="center"
        justify="center"
      >
   
          <Image
            src="/images/magapepe.png"
            alt="maga"
            height="300px"
            maxWidth="300px"
            objectFit="contain"
            filter="brightness(1.2) contrast(1.3)"
            mb={isSmallScreen ? 4 : 0}
            mr={isSmallScreen ? 0 : 5}
          />

        <Flex
          direction="column"
          justifyContent="center"
          textAlign={isSmallScreen ? "center" : "left"}
        >
          <Text
            fontSize={{ base: "50px", md: "40px" }}
            fontWeight="bold"
            color="#fff"
            mb={1}
            fontFamily="'PepeFont', sans-serif"
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
          >
            Join the Cult
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "30px" }}
            color="white"
            mb={6}
            fontFamily="'SecondaryFont', sans-serif"
          >
            Be part of the community
          </Text>
          <Flex justifyContent="center" alignItems="center" mb={10}>

          <Button
            as="a"
            href="https://t.me/BabyPepeGo"
            backgroundColor="#6CB947"
            color="white"
            width="90%"
            padding="30px 40px"
            borderRadius="8px"
            justifyContent={"center"}
            fontSize="25px"
            cursor="pointer"
            transition="all 0.3s"
            mb={10}
            border="4px solid white"
            fontFamily="'SecondaryFont', sans-serif"
            _hover={{ transform: "scale(1.1)", backgroundColor: "#006821" }}
          >
            <FaTelegram size={30} style={{ marginRight: "10px" }} />
            Join
          </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default JoinSection;
