"use client";

import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import Link from "next/link"; // Import Link from next/link
import { FaChartLine } from 'react-icons/fa';

const SwapBuyButtons: React.FC = () => {

  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      width="100%"
      mb={12} // Margin top for spacing
    >
      <Link href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4" passHref>
      <Button
          backgroundColor="rgba(50, 50, 50, 0.6)" // Transparent dark gray
          textColor={"#fff"}
          padding="25px 35px"
          borderRadius="20px"
          fontSize="25px"
          display="flex"
          alignItems="center"
          border="2px solid #fff" // Green border for a defined look
          justifyContent="center"
          transition="background-color 0.3s, transform 0.3s"
          _hover={{ backgroundColor: "#4A9F33", transform: "scale(1.05)" }}
          mx={4} // Margin right for spacing between buttons
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

        >
         
          Swap
          <Image
            src={"/logos/uniswap-white.png"} // Change src based on hover state
            alt="Swap Baby Pepe"
            boxSize="40px"
            mt={-2}
            mr={1}
          />
        </Button>
      </Link>

      <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x2c8f9bbae004854b9548f6c84720c70a8fceea23?t=1729782526258" passHref>
      <Button
          backgroundColor="rgba(50, 50, 50, 0.6)" // Transparent dark gray
          textColor={"#fff"}
          padding="25px 35px"
          borderRadius="20px"
          fontSize="25px"
          display="flex"
          alignItems="center"
          border="2px solid #fff" // Green border for a defined look
          justifyContent="center"
          transition="background-color 0.3s, transform 0.3s"
          _hover={{ backgroundColor: "#4A9F33", transform: "scale(1.05)" }}
          mr={4}
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
          Chart
          <FaChartLine style={{ marginLeft: "8px", marginTop:"-4" }} /> 

        </Button>
      </Link>
    </Flex>
  );
};

export default SwapBuyButtons;
