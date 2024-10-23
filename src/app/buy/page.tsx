"use client";

import { useState } from "react";
import { Button, Flex, Heading, Image, Icon } from "@chakra-ui/react";
import Header from "@/components/Header"; 
import { createThirdwebClient } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ConnectButton, darkTheme, PayEmbed, useActiveWallet, useDisconnect } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { IoLogOut } from "react-icons/io5";
import styles from '../../styles/landingpage.module.css'


const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_API as string, // Use NEXT_PUBLIC for client-side access
});

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

const BuyWithCreditCard: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  const account = useActiveAccount();
  const wallet = useActiveWallet();

  const customTheme = darkTheme({
    colors: {
      accentButtonBg: "#6CB947",  // Light green
      accentButtonText: "white",
      primaryButtonBg: "#4A9F33", // Darker green on hover
      primaryButtonText: "white",
      connectedButtonBg: "#367824", // Active state green
      borderColor: "white",
      danger: "#FF6347", // Red for error states
      inputAutofillBg: "#f0fff4",
      modalBg: "#367824",
      modalOverlayBg: "#6CB947",
      secondaryButtonBg: "#fff", // Light gray button
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

  
  const { disconnect } = useDisconnect();


  return (
    <>
      <Header />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bg="#156D30"
          padding={5}
          bgImage={"/images/background3.webp"}
        >

          <Heading size="xl" color="white" mb={6} mt={100} fontFamily="'PepeFont', sans-serif" >
            Buy with Credit Card
          </Heading>

    {!account ? (
          <ConnectButton
            client={client}
            wallets={wallets}
            theme={customTheme}
            chain={ethereum}
            connectModal={{ 
              size: "compact",
              titleIcon: "/images/pepeicon.png",
            }}
            
          />
        ) : (
          <>

        <Button
          onClick={() => { if (wallet) disconnect(wallet); }}
          bg="#4A9F33"
          color="white"
          size="lg"
          leftIcon={<Icon as={IoLogOut} boxSize={6} />}
          _hover={{ bg: "#367824", transform: "scale(1.05)" }}
          _active={{ bg: "#2F6B25", transform: "scale(1)" }}
          _focus={{ boxShadow: "0 0 0 2px #6CB947" }}
          borderRadius="8px"
          px={5}
          py={5}
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

 
<Image
      src="/images/pepe-bull.gif"
      alt="flappy pepe"
      width={{ base: "70%", md: "40%" }} // Adjusted size for smaller screens
      borderRadius="15px"
      objectFit="contain"
      zIndex={"100"}
      pointerEvents="none"
      style={{
        filter: 'brightness(1.2) contrast(1.3)',
      }}
    />



    <Flex mt={10} direction={"column"}>

      <Heading size="xl" color="white" mb={6} mt={100} fontFamily="'PepeFont', sans-serif" >
        Swap with Uniswap
      </Heading>
      {!showIframe ? (
          <button
          onClick={() => setShowIframe(true)}
          className={styles.uniswapButton}
        >
            Open Uniswap Swap
          </button>
        ) : (
          <iframe
            src="https://app.uniswap.org/#/swap?outputCurrency=0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4&chain=mainnet"
            width="320px"
            height="530px"
            style={{
              border: "0",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "20px"
            }}
            title="Uniswap Swap"
          ></iframe>
        )}


      </Flex>
      </>
      
      )}
        </Flex>
        
    </>
  );
};

export default BuyWithCreditCard;
