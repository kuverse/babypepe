"use client";

import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface Link {
  href: string;
  label: string;
  logo: string;
  position: { left: string; top: string }; // Add position as part of the Link interface
}

const BubbleChart = () => {
  const links: Link[] = useMemo(() => [
    {
      href: "https://dextools.io",
      label: "DexTools",
      logo: "/logos/dextools.svg",
      position: { left: "10%", top: "20%" }, // Set position for each icon
    },
    {
      href: "https://dexscreener.com/ethereum/0x2c8f9bbae004854b9548f6c84720c70a8fceea23",
      label: "DexScreener",
      logo: "/logos/dexsxcreener.png",
      position: { left: "60%", top: "15%" },
    },
    {
      href: "https://etherscan.io/token/0x69babe9811cc86dcfc3b8f9a14de6470dd18eda4",
      label: "Etherscan",
      logo: "/logos/etherscan.png",
      position: { left: "80%", top: "60%" },
    },
    {
      href: "https://www.coingecko.com/en/coins/baby-pepe-3",
      label: "Coin Gecko",
      logo: "/logos/CoinGecko_logo.png",
      position: { left: "60%", top: "65%" },
    },
    {
      href: "https://coinmarketcap.com/currencies/babypepe-coin/",
      label: "CMC",
      logo: "/logos/cmc.webp",
      position: { left: "20%", top: "75%" },
    },
    {
      href: "https://app.bubblemaps.io/eth/token/0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4",
      label: "Bubble Map",
      logo: "/logos/Bubblemaps.png",
      position: { left: "50%", top: "80%" },
    },
  ], []);

  return (
    <Box
      id="bubble-chart"
      position="relative"
      width="100vw"
      height="110vh"
      overflow="hidden"
      mb={4}
      borderRadius="10px"
    >
      {links.map((link, index) => (
        <Box
          key={index}
          as="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          position="absolute"
          left={link.position.left} // Use the predefined left position
          top={link.position.top} // Use the predefined top position
          width="80px"
          height="80px"
          borderRadius="50%"
          overflow="hidden"
          bg="white"
          boxShadow="1px 10px 11px #6CB947"
          display="flex"
          justifyContent="center"
          alignItems="center"
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
    </Box>
  );
};

export default BubbleChart;
