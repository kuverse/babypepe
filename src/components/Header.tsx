"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Slide,
  VStack,
  useOutsideClick,
  Image,
  Link as ChakraLink,
  PopoverContent,
  List,
  Text,
  PopoverBody,
  Popover,
  ListItem,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: menuRef,
    handler: () => setIsOpen(false),
  });

  const handleClick = () => {
    setIsOpen((prev) => !prev); // Toggle menu
  };

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg="transparent" color="white" px={6} py={4} position="absolute" fontFamily="'ThirdFont', sans-serif"
    fontSize={12} top={0} width="100%" zIndex={1000}             
    //textShadow="0.5px 0.5px 0 #022B0F, -0.5px 0.5px 0 #022B0F, 0.5px -0.5px 0 #022B0F, -0.5px -0.5px 0 #022B0F"
    >
      <Flex align="center" justify="space-between" fontFamily="'ThirdFont', sans-serif">
          <Link href="/" passHref>
            <Flex direction={"row"} >
            <Image src="/logos/babyPepe.JPG" width={45} height={45} alt="baby-pepe-logo" borderRadius={"full"}/>
            <Text marginTop={1} marginLeft={3} fontFamily="'PepeFont', sans-serif" fontSize={30}
            textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
            >Baby Pepe</Text>
            </Flex>
          </Link>

        <IconButton
          icon={isOpen ? <CloseIcon boxSize={8} color="#fff" /> : <HamburgerIcon boxSize={8} color="#fff" />}
          aria-label="Toggle Menu"
          onClick={handleClick}
          display={{ base: "block", md: "none" }}
          backgroundColor="transparent" // Transparent background
          _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Optional: Slight hover effect
          _active={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} // Optional: Active state effect
        />


        <Flex display={{ base: "none", md: "flex" }} align="center" gap={4} padding={"5px"} >
          <ChakraLink as={Link} href="/" marginRight={"20px"} fontWeight="bold" _hover={{ color: "#A02E00" }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} href="/flappy-baby-pepe" marginRight={"20px"} fontWeight="bold" _hover={{ color: "#A02E00" }}>
            Arcade
          </ChakraLink>

          <DropdownMenu
            title="Info"
            options={[
              { label: "About", href: "/#about" },
              { label: "Tokenomics", href: "/#tokenomics" },
              { label: "How to Buy", href: "/#how-to-buy" },
              { label: "Roadmap", href: "/#roadmap" },
              { label: "Join the Cult", href: "/#join-us" },
              { label: "White Paper", href: "/white-paper" },
            ]}
          />

          <DropdownMenu
            title="Community"
            options={[
              { label: "Blog", href: "/what-is-baby-pepe" },
              { label: "Meme Gallery", href: "/meme-gallery" },
              { label: "Media Kit", href: "/media-kit" },
              { label: "Meme Generator", href: "/meme-generator" },
              { label: "Baby Pepe & Friends", href: "/baby-pepe-and-friends" },
              { label: "Telegram", href: "https://t.me/BabyPepeGo" },
            ]}
          />

          <DropdownMenu
            title="Buy Now"
            options={[
              { label: "Uniswap", href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4" },
              { label: "Buy with Fiat", href: "https://flooz.xyz/0x69babepepe" },
            ]}
          />

        </Flex>
      </Flex>

      <Slide direction="left" in={isOpen} style={{ zIndex: 9 }}>
        <Box ref={menuRef} bg="#6CB947" w="55%" h="100vh" pos="fixed" fontFamily="'ThirdFont', sans-serif"
                  border="2px solid white" // White border
 
        fontSize={15} top="0" left="0" p={4} shadow="lg" zIndex={2000}>
          <VStack align="start" spacing={5} padding={"10px"}>
            <Link href="/" passHref>
            <Flex direction={"row"} >
            <Image src="/logos/babyPepe.JPG" width={70} height={70} alt="babyPepe" borderRadius={"full"}/>
            <Text marginTop={2} marginLeft={5} fontFamily="'PepeFont', sans-serif" fontSize={30}>Baby Pepe</Text>
            </Flex>
            </Link>
            <ChakraLink ml={2} fontFamily="'ThirdFont', sans-serif" as={Link} href="/" marginTop={"40px"} fontWeight="bold" _hover={{ color: "#A02E00" }}>
              Home
            </ChakraLink>
            <ChakraLink ml={2} fontFamily="'ThirdFont', sans-serif" as={Link} href="/flappy-baby-pepe" fontWeight="bold" _hover={{ color: "#A02E00"}} my={"10px"}>
              Arcade
            </ChakraLink>

            <DropdownMenu
              title="Info"
              options={[
                { label: "About", href: "/#about",  },
                { label: "Tokenomics", href: "/#tokenomics" },
                { label: "How to Buy", href: "/#how-to-buy" },
                { label: "Roadmap", href: "/#roadmap" },
                { label: "Join the Cult", href: "/#join-us" },
                { label: "White Paper", href: "/white-paper" },

              ]}
            />
            <DropdownMenu
              title="Community"
              options={[
                { label: "Blog", href: "/what-is-baby-pepe" },
                { label: "Meme Gallery", href: "/meme-gallery" },
                { label: "Media Kit", href: "/media-kit" },
                { label: "Meme Generator", href: "/meme-generator" },
                { label: "Baby Pepe & Friends", href: "/baby-pepe-and-friends" },
                { label: "Telegram", href: "https://t.me/BabyPepeGo" },
              ]}
            />


    <DropdownMenu
            title="Buy Now"
            options={[
              { label: "Uniswap", href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4", target: "_blank", rel: "noopener noreferrer"  },
              { label: "Buy with Fiat", href: "https://flooz.xyz/0x69babepepe", target: "_blank", rel: "noopener noreferrer"  },
            ]}
          />
           
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};

interface MenuOption {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

interface DropdownMenuProps {
  title: string;
  options: MenuOption[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      trigger="hover"
      placement="bottom-start"
      onOpen={() => setIsOpen(true)}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <PopoverTrigger>
        <Box
          cursor="pointer"
          display="flex"
          alignItems="center"
          p={2}
          fontWeight="bold"
          borderRadius="8px"
          bg={isOpen ? "#A02E00" : "transparent"} // Highlight when open
          color={isOpen ? "white" : "inherit"} // Text color when open
          transition="background 0.3s ease, color 0.3s ease"
          _hover={{ bg: "#A02E00", color: "white" }} // Hover effect
        >
          {title}
          <ChevronDownIcon ml={2} />
        </Box>
      </PopoverTrigger>
      <PopoverContent bg="#156D30" borderColor="#6CB947" borderRadius="10px">
        <PopoverArrow bg="#156D30" />
        <PopoverCloseButton />
        <PopoverBody>
          <List spacing={2}>
            {options.map((option, index) => (
              <ListItem
                key={index}
                _hover={{
                  bg: "#6CB947", // Same color as Arcade on hover
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <Link href={option.href} passHref
                  
                  target="_blank" 
                  rel="noopener noreferrer" 
                    style={{
                      textDecoration: "none",
                      padding: "10px",
                      display: "block", // Entire area is clickable
                    }}
                    onClick={() => setIsOpen(false)} // Close the menu when clicked
                  >
                    {option.label}
                 
                </Link>
              </ListItem>
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Header;
