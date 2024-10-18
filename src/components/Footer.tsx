"use client";

import { Box, Text, Flex, Link, IconButton, HStack, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("whiteAlpha.900", "whiteAlpha.700");

  return (
    <Box
      bg={bg}
      color={color}
      py={6}
      px={{ base: 4, md: 8 }}
      width="100%"
      position="fixed"
      bottom={0}
      left={0}
      borderTop="2px solid"
      borderColor={useColorModeValue("gray.700", "whiteAlpha.300")}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Left Section */}
        <HStack spacing={6} mb={{ base: 4, md: 0 }}>
          <Link href="#" fontWeight="bold" _hover={{ color: "teal.300" }}>
            Privacy Policy
          </Link>
          <Link href="#" fontWeight="bold" _hover={{ color: "teal.300" }}>
            Terms of Service
          </Link>
        </HStack>

        {/* Right Section: Social Icons */}
        <HStack spacing={4}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "teal.500" }}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "teal.500" }}
          />
          <IconButton
            aria-label="Github"
            icon={<FaGithub />}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "teal.500" }}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "teal.500" }}
          />
        </HStack>
      </Flex>

      {/* Disclaimer Text */}
      <Text mt={4} fontSize="sm" textAlign="center" opacity={0.7}>
        © 2024 Your Website. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
