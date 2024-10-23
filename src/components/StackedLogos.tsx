"use client";

import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface Link {
  href: string;
  label: string;
  logo: string;
}

const BubbleChart = () => {
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
      position="relative"
      width="100vw"
      height="110vh"
      overflow="hidden"
      mb={4}
      borderRadius="10px"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {links.map((link, index) => (
        <Box
          key={index}
          as="a"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          position="relative"
          width="80px"
          height="80px"
          borderRadius="50%"
          overflow="hidden"
          bg="white"
          boxShadow="1px 10px 11px #6CB947"
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="10px" // Adds spacing between icons
        >
          <Image
            src={link.logo}
            alt={link.label}
            width={80}
            height={80}
            loading="lazy"
            priority={false}
            style={{ pointerEvents: "none", objectFit: "contain" }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default BubbleChart;
