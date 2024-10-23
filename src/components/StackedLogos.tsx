"use client";

import React, { useMemo } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface Link {
  href: string;
  label: string;
  logo: string;
}

const BubbleChart: React.FC = () => {
  const links: Link[] = useMemo(() => [
    {
      href: "https://dextools.io",
      label: "DexTools",
      logo: "/logos/dextools.svg",
    },
    {
      href: "https://dexscreener.com/ethereum/0x2c8f9bbae004854b9548f6c84720c70a8fceea23",
      label: "DexScreener",
      logo: "/logos/dexsxcreener.png",
    },
    {
      href: "https://etherscan.io/token/0x69babe9811cc86dcfc3b8f9a14de6470dd18eda4",
      label: "Etherscan",
      logo: "/logos/etherscan.png",
    },
    {
      href: "https://www.coingecko.com/en/coins/baby-pepe-3",
      label: "Coin Gecko",
      logo: "/logos/CoinGecko_logo.png",
    },
    {
      href: "https://coinmarketcap.com/currencies/babypepe-coin/",
      label: "CMC",
      logo: "/logos/cmc.webp",
    },
    {
      href: "https://app.bubblemaps.io/eth/token/0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4",
      label: "Bubble Map",
      logo: "/logos/Bubblemaps.png",
    },
  ], []);

  return (
    <Box
      id="bubble-chart"
      position="absolute" // Change to absolute positioning
      top="20%" // Adjust this value to move it vertically
      left="50%" // Center horizontally
      transform="translateX(-50%)" // Center the component
      width="80vw" // Use viewport width for responsiveness
      maxWidth="1200px" // Set a max width for larger screens
      zIndex={999} // Ensure it overlays above other content
      display="flex"
      flexDirection="column" // Stack title and icons vertically
      alignItems="center"
      justifyContent="center"
      padding={4} // Add padding
      //backgroundColor="rgba(255, 255, 255, 0.8)" // Optional: Add a background for better visibility
      borderRadius="15px" // Optional: Round corners
    >
      <Heading
        as="h1"
        mb={4}
        fontSize={{ base: "30px", md: "40px" }}
        textAlign="center"
        color="#6CB947"
        fontFamily="'PepeFont', sans-serif"
      >
        Logos
      </Heading>

      <Flex
        flexWrap="wrap"
        justifyContent="center" // Center logos
        alignItems="center"
        width="100%" // Full width
      >
        {links.map((link, index) => (
          <Box
            key={index}
            as="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            width="80px"
            height="80px"
            borderRadius="50%"
            overflow="hidden"
            bg="white"
            boxShadow="1px 10px 11px rgba(0, 0, 0, 0.1)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin={2} // Add margin between icons
            transition="transform 0.3s" // Add transition effect
            _hover={{ transform: "scale(1.05)" }} // Scale on hover
          >
            <Image
              src={link.logo}
              alt={link.label}
              width={80}
              height={80}
              loading="lazy"
              style={{ pointerEvents: "none", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BubbleChart;
