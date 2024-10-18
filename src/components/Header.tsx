"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Slide,
  VStack,
  useOutsideClick,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useOutsideClick({
    ref: menuRef,
    handler: () => setIsOpen(false),
  });

  // Close menu on window resize (for responsive behavior)
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg="gray.800" color="white" px={6} py={4} position="fixed" top={0} width="100%" zIndex={10}>
      <Flex align="center" justify="space-between">
        <Heading size="md" cursor="pointer">
          My Logo
        </Heading>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          display={{ base: "block", md: "none" }}
        />
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={4}>
          <DropdownMenu title="Info" options={['About Us', 'Contact']} />
          <DropdownMenu title="Community" options={['Forum', 'Events']} />
        </Flex>
      </Flex>

      {/* Sliding Menu */}
      <Slide direction="left" in={isOpen} style={{ zIndex: 9 }}>
        <Box
          ref={menuRef}
          bg="gray.700"
          w="60%"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          p={4}
          shadow="lg"
        >
          <VStack align="start" spacing={6}>
            <DropdownMenu title="Info" options={['About Us', 'Contact']} />
            <DropdownMenu title="Community" options={['Forum', 'Events']} />
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};

interface DropdownMenuProps {
  title: string;
  options: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, options }) => (
  <Menu>
    <MenuButton as={Box} cursor="pointer" display="flex" alignItems="center">
      {title} <ChevronDownIcon ml={1} />
    </MenuButton>
    <MenuList>
      {options.map((option, index) => (
        <MenuItem key={index}>{option}</MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default Header;
