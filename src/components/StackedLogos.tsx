"use client";

import React, { useMemo } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion

interface Link {
  href: string;
  label: string;
  logo: string | React.ReactNode; // Updated to allow both string and React nodes
}

const BubbleChart: React.FC = () => {
  const links: Link[] = useMemo(() => [
    {
      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x2c8f9bbae004854b9548f6c84720c70a8fceea23?t=1729782526258",
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
    {
      href: "https://t.me/BabyPepeGo",
      label: "Telegram",
      logo: <FaTelegram size={40} style={{ color: "#6CB947" }} />,
    },
    {
      href: "https://x.com/0x69babEPepe",
      label: "X",
      logo: <FaXTwitter size={40} style={{ color: "#022B0F" }} />,
    },
  ], []);

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      id="bubble-chart"
      position="absolute"
      top="65%"
      left="50%"
      transform="translateX(-50%)"
      width="80vw"
      maxWidth="800px"
      zIndex={43}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={5}
      borderRadius="15px"
    >
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            style={{ margin: "6px" }} // Adjust margin as needed
          >
            <Box
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              width="60px"
              height="60px"
              borderRadius="50%"
              overflow="hidden"
              bg="white"
              boxShadow="2px 10px 11px rgba(0, 0, 0, 0.1)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="2px solid white"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.15)" }}
            >
              {typeof link.logo === 'string' ? (
                <Image
                  src={link.logo}
                  alt={link.label}
                  width={80}
                  height={80}
                
                  loading="lazy"
                  style={{ pointerEvents: "none", objectFit: "contain" }}
                />
              ) : (
                <Box as="span" fontSize="24px" padding={2}> {/* Adjust icon size as needed */}
                  {link.logo}
                </Box>
              )}
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default BubbleChart;
