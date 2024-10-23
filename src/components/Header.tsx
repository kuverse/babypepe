"use client";

import { useState, useRef, useEffect } from "react";
import {Box,
  Flex,
  Heading,
  IconButton,
  Slide,
  VStack,
  useOutsideClick,
  Image,
  Link as ChakraLink,
  PopoverContent,
  List,
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

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg="transparent" color="white" px={6} py={4} position="fixed" 
    fontSize={25} top={0} width="100%" zIndex={10}>
      <Flex align="center" justify="space-between">
        <Heading size="xl" cursor="pointer">
          <Link href="/" passHref>
            <Image src="/images/pepeicon.png" width={50} height={50} alt="logo" />
          </Link>
        </Heading>

        <IconButton
          icon={isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />}
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          display={{ base: "block", md: "none" }}
        />



        
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={4} padding={"5px"} >
          
          <ChakraLink as={Link} href="/" marginRight={"20px"} fontWeight="bold" _hover={{ color: "#A02E00"  }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} href="/flappy-baby-pepe"  marginRight={"20px"} fontWeight="bold" _hover={{color: "#A02E00"   }}>
            Arcade
          </ChakraLink>
          
          <DropdownMenu
            title="Info"
            options={[
              { label: "About", href: "/#about" },
              { label: "Tokenomics", href: "/#tokenomics" },
              { label: "Baby Pepe & Friends", href: "/#friends" },
              { label: "How to Buy", href: "/#how-to-buy" },
              { label: "Links", href: "/#links" },
              { label: "Join the Cult", href: "/#join-us" },
            ]}
          />

          <DropdownMenu
            title="Community"
            options={[
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
              { label: "Buy with Credit Card", href: "/buy" },
              { label: "Uniswawp", href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4" },
            ]}
          />

        </Flex>
      </Flex>





      <Slide direction="left" in={isOpen} style={{ zIndex: 9 }}>
        <Box ref={menuRef} bg="#6CB947" w="55%" h="100vh" pos="fixed" 
        fontSize={25} top="0" left="0" p={4} shadow="lg">
          <VStack align="start" spacing={5} padding={"10px"} >


          <Link href="/" passHref>
            <Image src="/images/white-circle-logo.png" width={50} height={50} alt="logo" />
          </Link>
          <ChakraLink as={Link} href="/" marginTop={"40px"} fontWeight="bold" _hover={{ color: "#A02E00"   }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} href="/flappy-baby-pepe" fontWeight="bold" _hover={{ color: "#A02E00"   }} my={"10px"}>
            Arcade
          </ChakraLink>
            <DropdownMenu
              title="Info"
              options={[
              { label: "About", href: "/#about" },
              { label: "Tokenomics", href: "/#tokenomics" },
              { label: "Baby Pepe & Friends", href: "/#friends" },
              { label: "How to Buy", href: "/#how-to-buy" },
              { label: "Links", href: "/#links" },
              { label: "Join the Cult", href: "/#join-us" },
              ]}
            />
            <DropdownMenu
              title="Community"
              options={[
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
              { label: "Buy with Credit Card", href: "/buy" },
              { label: "Uniswawp", href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4" },
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
      onClose={() => setIsOpen(false)}
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
                <Link href={option.href} passHref legacyBehavior>
                  <a
                    style={{
                      textDecoration: "none",
                      padding: "10px",
                      display: "block", // Entire area is clickable
                    }}
                  >
                    {option.label}
                  </a>
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
