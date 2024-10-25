"use client";

import React, { useState } from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import Link from "next/link"; // Import Link from next/link
import { FaCreditCard } from 'react-icons/fa';

const SwapBuyButtons: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      width="100%"
      my={12} // Margin top for spacing
    >
      <Link href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4" passHref>
        <Button
          backgroundColor="#fff"
          textColor={isHovered ? "#fff" : "#6CB947"}
          padding="25px 40px"
          borderRadius="20px"
          fontSize="25px"
          display="flex"
          alignItems="center"
          border="2px solid #6CB947" // Green border for a defined look
          justifyContent="center"
          transition="background-color 0.3s, transform 0.3s"
          _hover={{ backgroundColor: "#4A9F33", transform: "scale(1.05)" }}
          mr={4} // Margin right for spacing between buttons
          onMouseEnter={() => setIsHovered(true)} // Set hover state
          onMouseLeave={() => setIsHovered(false)} // Reset hover state
        >
          <Image
            src={isHovered ? "/logos/uniswap-white.png" : "/images/greenUniswap.png"} // Change src based on hover state
            alt="Uniswap Logo"
            boxSize="40px"
            mt={-2}
          />
          Swap
        </Button>
      </Link>

      <Link href="/buy" passHref>
        <Button
          backgroundColor="transparent"
          color="#6CB947" // Green text color
          padding="25px 40px" // Adjust padding for better aesthetics
          borderRadius="20px"
          fontSize="25px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="2px solid #6CB947" // Green border for a defined look
          transition="background-color 0.3s, transform 0.3s, color 0.3s"
          _hover={{ backgroundColor: "#6CB947", color: "white", transform: "scale(1.05)" }}
        >
          <FaCreditCard style={{ marginRight: "8px", marginTop:"-2" }} /> 
          Buy
        </Button>
      </Link>
    </Flex>
  );
};

export default SwapBuyButtons;
