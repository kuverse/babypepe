"use client";

import { Flex, HStack, IconButton, Link, Image } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialsProps {
  size?: number; 
}

const Socials: React.FC<SocialsProps> = ({ size = 20 }) => {
  return (
    <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }} padding={"5px"}>
      <HStack spacing={4} mt={{ base: 2, md: 0 }}>
        {/* Telegram */}
        <Link href="https://t.me/BabyPepeGo" isExternal>
          <IconButton
            icon={<FaTelegram size={size} />} 
            aria-label="Telegram"
            variant="ghost"
            color="white"
            size="lg"
          />
        </Link>

        {/* Twitter/X */}
        <Link href="https://x.com/0x69babEPepe" isExternal>
          <IconButton
            icon={<FaXTwitter size={size} />} // Apply the size prop here
            aria-label="Twitter"
            variant="ghost"
            color="white"
            size="lg"
          />
        </Link>

        {/* DexScreener */}
        <Link href="https://dexscreener.com/ethereum/0x2c8f9bbae004854b9548f6c84720c70a8fceea23" isExternal>
          <IconButton
            aria-label="DexScreener"
            icon={
              <Image
                src="/logos/dexsxcreener.png"
                alt="DexScreener"
                width={`${size + 5}px`} // Apply size prop to custom image
                height={`${size + 5}px`}
                filter="invert(1)"
              />
            }
            variant="ghost"
            size="lg"
          />
        </Link>

        <Link
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x2c8f9bbae004854b9548f6c84720c70a8fceea23?t=1729272667192"
            isExternal
            target="_blank"
            rel="noopener noreferrer"
>          <IconButton
            aria-label="DexTools"
            icon={
              <Image
                src="/logos/dextools1.png"
                alt="DexTools"
                boxSize={`${size - 1}px`} // Apply size prop to custom image
                color="white"
              />
            }
            variant="ghost"
            size="lg"
          />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Socials;
