"use client";

import React from "react";
import { Box, Image, Flex, Heading, Button, Icon, Text } from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Header from "@/components/Header"; 
import { createThirdwebClient } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ConnectButton, darkTheme, PayEmbed, useActiveWallet, useDisconnect } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import styles from '../styles/landingpage.module.css'; // Import CSS module

// Initialize Thirdweb client
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_API as string,
});

// Define available wallets
const wallets = [
  inAppWallet({
    auth: {
      options: ["discord", "telegram", "x", "guest"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

// Main component
const BuyWithCreditCard: React.FC = () => {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();

  const customTheme = darkTheme({
    colors: {
      accentButtonBg: "#6CB947",
      accentButtonText: "white",
      primaryButtonBg: "#4A9F33",
      primaryButtonText: "white",
      connectedButtonBg: "#367824",
      borderColor: "white",
      danger: "#FF6347",
      inputAutofillBg: "#f0fff4",
      modalBg: "#156D30",
      modalOverlayBg: "#6CB947",
      secondaryButtonBg: "#fff",
      secondaryButtonHoverBg: "#6CB947",
      secondaryButtonText: "#1A202C",
      tooltipBg: "#fff",
      tooltipText: "white",
      separatorLine: "#fff",
      secondaryText: "#fff",
      secondaryIconHoverColor: "#fff",
      secondaryIconHoverBg: "#A02E00",
      tertiaryBg: "#6CB947",
      accentText: "#fff"
    },
    fontFamily: "'SecondaryFont', sans-serif",
  });

  return (
    <>
      <Header />
      <Flex
        direction={{ base: "column", md: "row" }} // Column on small screens, row on larger
        alignItems="center"
        justifyContent="space-between"
        minHeight="60vh"
        width="90%"
        bg="#156D30"
        padding={8}
        my={12}
        boxShadow="lg"
        borderRadius={15}
        border="2px solid white"
        backgroundImage="/images/background01.png"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Image
          src="/images/pepe-bull.gif"
          alt="Cool Pepe"
          width={{ base: "70%", md: "40%" }}
          borderRadius="15px"
          objectFit="contain"
          zIndex={100}
          pointerEvents="none"
          style={{
            filter: 'brightness(1.2) contrast(1.3)',
          }}
        />

        <Box
          flex="1" // Allow text and button to take the remaining space
          textAlign={{ base: "center", md: "left" }} // Center text on small screens
          mt={{ base: 4, md: 0 }} // Margin top on small screens
        >

    


          <Heading
          as="h1"
          my={4}
          width={"99%"}
          fontSize="5xl"
          textAlign="center"
          color="#fff"
          fontFamily="'PepeFont', sans-serif"
          zIndex={2} 
          textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
        >
            <Flex alignItems="center" justifyContent="center" direction={"column"}>
              <FaCreditCard size={50} />
              <Flex mt={4}>Buy Baby Pepe Token</Flex>
            </Flex>        
            </Heading>


          <Text
          mb={4}
          fontSize={{ base: "3xl", md: "30px" }}
          textAlign="center"
          color="#fff"
          fontWeight={"bold"}
          fontFamily="'SecondaryFont', sans-serif"
          //textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
          zIndex={2} // Bring text above the overlay
        >
          Easy on-ramp to web3
        </Text>

          {!account ? (
            <Flex direction={"row"} textAlign={"center"} justifyContent={"center"} p={5}>
              <ConnectButton
                client={client}
                wallets={wallets}
                theme={customTheme}
                chain={ethereum}
                connectModal={{ 
                  size: "compact",
                  titleIcon: "/images/pepeicon.png",
                }}
                connectButton={{
                  label: "Connect Wallet",
                  className: styles.thirdwebButton,
                }}
              />
            </Flex>
          ) : (
            <>
              <Button
                onClick={() => { if (wallet) disconnect(wallet); }}
                bg="#4A9F33"
                color="white"
                size="lg" // Adjust size for larger button
                leftIcon={<Icon as={IoLogOut} boxSize={6} />}
                _hover={{ bg: "#367824", transform: "scale(1.05)" }}
                _active={{ bg: "#2F6B25", transform: "scale(1)" }}
                _focus={{ boxShadow: "0 0 0 2px #6CB947" }}
                borderRadius="8px"
                px={6}
                py={4}
                transition="all 0.2s"
                cursor="pointer"
                mb={5}
              >
                Logout
              </Button>
              <PayEmbed 
                client={client}
                theme={customTheme}
                payOptions={{
                  prefillBuy: {
                    token: {
                      address: "0x69babe9811cc86dcfc3b8f9a14de6470dd18eda4",
                      name: "Baby Pepe",
                      symbol: "BABYPEPE",
                      icon: "/images/pepeicon.png", 
                    },
                    chain: ethereum,
                    allowEdits: {
                      amount: true, 
                      token: false, 
                      chain: false,
                    },
                  },
                  buyWithCrypto: false, 
                }}
              />
            </>
          )}

          {/* Powered by Section */}
          <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} mt={4} p={2}>
            <Heading
              as="h1"
              fontSize={{ base: "20px", md: "30px" }}
              textAlign="center"
              color="#fff"
              fontFamily="'SecondaryFont', sans-serif"
              mr={2}
            >
              Powered by
            </Heading>
            <Image
              src="/images/thirdweb-wordmark-fullwhite.svg"
              alt="thirdweb"
              width={{ base: "30%", md: "20%" }}
              borderRadius="15px"
              objectFit="contain"
              zIndex={100}
              pointerEvents="none"
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default BuyWithCreditCard;
