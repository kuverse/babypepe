"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface Link {
  href: string;
  label: string;
  logo: string;
  initialX: number;
  initialY: number;
}

const BubbleChart = () => {
  const dumpsterRef = useRef<HTMLDivElement>(null);
  const [droppedLink, setDroppedLink] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState(800);
  const [viewportHeight, setViewportHeight] = useState(600);

  useEffect(() => {
    // Set viewport size on mount and update on resize
    const updateViewport = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const links: Link[] = useMemo(
    () => [
      {
        href: "https://dextools.io",
        label: "DexTools",
        logo: "/logos/dextools.svg",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 150),
      },
      {
        href: "https://dexscreener.com/ethereum/0x2c8f9bbae004854b9548f6c84720c70a8fceea23",
        label: "DexScreener",
        logo: "/logos/dexsxcreener.png",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 150),
      },
      {
        href: "https://etherscan.io/token/0x69babe9811cc86dcfc3b8f9a14de6470dd18eda4",
        label: "Etherscan",
        logo: "/logos/etherscan.png",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 150),
      },
      {
        href: "https://www.coingecko.com/en/coins/baby-pepe-3",
        label: "Coin Gecko",
        logo: "/logos/CoinGecko_logo.png",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 150),
      },
      {
        href: "https://coinmarketcap.com/currencies/babypepe-coin/",
        label: "CMC",
        logo: "/logos/cmc.webp",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 200),
      },
      {
        href: "https://app.bubblemaps.io/eth/token/0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4",
        label: "Bubble Map",
        logo: "/logos/Bubblemaps.png",
        initialX: Math.random() * (viewportWidth - 100),
        initialY: Math.random() * (viewportHeight - 200),
      },
    ],
    [viewportWidth, viewportHeight]
  );

  const handleDragStop = (
    e: DraggableEvent,
    data: DraggableData,
    link: string
  ) => {
    const dumpster = dumpsterRef.current;
    if (dumpster) {
      const dumpsterRect = dumpster.getBoundingClientRect();
      const logoRect = (e.target as HTMLDivElement).getBoundingClientRect();

      if (
        logoRect.left >= dumpsterRect.left &&
        logoRect.right <= dumpsterRect.right &&
        logoRect.top >= dumpsterRect.top &&
        logoRect.bottom <= dumpsterRect.bottom
      ) {
        setDroppedLink(link); // Open the link if dropped in the dumpster
      }
    }
  };

  if (droppedLink) {
    window.open(droppedLink, "_blank", "noopener,noreferrer");
    setDroppedLink(null);
  }

  return (
    <Box
      id="bubble-chart"
      position="relative"
      width="100vw"
      height="100vh"
      overflow="hidden"
      mb={4}
      borderRadius="10px"
      //backgroundColor="#f0f0f0"
    >
      {links.map((link, index) => (
        <Draggable
          key={index}
          defaultPosition={{ x: link.initialX, y: link.initialY }}
          onStop={(e, data) => handleDragStop(e, data, link.href)}
        >
          <Box
            position="absolute"
            width="80px"
            height="80px"
            borderRadius="50%"
            overflow="hidden"
            bg="white"
            boxShadow="1px 10px 11px #6CB947"
            cursor="grab"
            border="5px solid white"
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
        </Draggable>
      ))}

      <Box
        ref={dumpsterRef}
        position="absolute"
        bottom="40px"
        right="275px"
        width="160px"
        height="220px"
        borderRadius="10%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
    </Box>
  );
};

export default BubbleChart;
