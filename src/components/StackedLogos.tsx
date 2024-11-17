"use client";

import React, { useMemo } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Link {
  href: string;
  label: string;
  logo: string | React.ReactNode;
}

const BubbleChart: React.FC = () => {
  const links: Link[] = useMemo(
    () => [
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
    ],
    []
  );

  const slideInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      id="bubble-chart"
      margin="0 auto"
      width="90vw"
      maxWidth="500px"
      zIndex={43}
      padding={5}
      borderRadius="15px"
    >
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={4} // Adds consistent spacing
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "45%", // Ensure even width for icons in rows
              maxWidth: "120px",
              margin: "10px 5px", // Consistent spacing for all screen sizes
            }}
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
              boxShadow="5px 10px 11px rgba(0, 0, 0, 0.1)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="2px solid white"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.15)" }}
            >
              {typeof link.logo === "string" ? (
                <Image
                  src={link.logo}
                  alt={link.label}
                  width={80}
                  height={80}
                  loading="lazy"
                  style={{ pointerEvents: "none", objectFit: "contain" }}
                />
              ) : (
                <Box as="span" fontSize="24px" padding={2}>
                  {link.logo}
                </Box>
              )}
            </Box>
            <Box
              as="span"
              fontSize="14px"
              padding={2}
              color={"#fff"}
              textAlign="center"
              fontFamily="'SecondaryFont', sans-serif"
              textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"

            >
              {link.label}
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default BubbleChart;
