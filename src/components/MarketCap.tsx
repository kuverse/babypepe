"use client";

import React, { useEffect, useState } from "react";
import { Box, Text, Spinner, Flex, Image } from "@chakra-ui/react";

const MarketCapVolume: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [usdValue, setUsdValue] = useState('');
  const [volumeValue, setVolumeValue] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [ethPrice, setEthPrice] = useState('');

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=baby-pepe-3&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
        );
        const ethereumResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
        );

        const ethResult = await ethereumResponse.json();
        const result = await response.json();
        const marketData = result["baby-pepe-3"];
        const ethMarketData = ethResult["ethereum"];
        setEthPrice(ethMarketData.usd);
        setUsdValue(marketData.usd);
        setVolumeValue(marketData.usd_24h_vol);
        const mcap = (parseFloat(marketData.usd) * 420690000000);
        setMarketCap(mcap.toFixed(2)); // Set market cap with 2 decimal places
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
        <Box
        p={5}
        position="relative"
        boxShadow="lg"
        height={50}
        backgroundColor="rgba(50, 50, 50, 0.6)" // Transparent dark gray
        width="100%" // Full width
        display="flex"
        alignItems="center"
        border="1px solid #fff" // White border for definition
        overflow="hidden"
        mb={10}
        mt={5}
        borderRadius={15}
      >
  
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" color="white" /> {/* Set spinner color to white */}
        </Flex>
      ) : (
        <Flex
          className="ticker"
          whiteSpace="nowrap"
          animation="scroll 25s linear infinite" // Adjusted duration for smoother scrolling
          fontFamily="'SecondaryFont', sans-serif"
        >
          {/* Duplicate the content for endless scroll effect */}
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <Flex direction={"row"} alignItems="center" mx={5}>
                <Image src="/logos/fbe8b5cf8780a6a5f6ff3678e60ed349.avif" height={5} width={5} alt="Market Cap baby pepe" />
                <Text fontSize="2xl" fontWeight="bold" color="white" mx={2}           textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
                >
                  Market Cap: ${parseFloat(marketCap).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
              </Flex>

              <Flex direction={"row"} alignItems="center" mx={5}>
              <Image src="/logos/babyPepe.JPG" width={5} height={5} alt="baby pepe logo" borderRadius={"full"}/>
              <Text fontSize="2xl" fontWeight="bold" color="white" mx={2}           textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
              >
                  Token Price: ${parseFloat(usdValue).toLocaleString(undefined, { minimumFractionDigits: 8, maximumFractionDigits: 8 })}
                </Text>
              </Flex>

              <Flex direction={"row"} alignItems="center" mx={5}>
              <Image src="/logos/babyPepe.JPG" width={5} height={5} alt="baby pepe logo" borderRadius={"full"}/>
              <Text fontSize="2xl" fontWeight="bold" color="white" mx={2}           textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
              >
                  24hr Volume: ${parseFloat(volumeValue).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
              </Flex>

              <Flex direction={"row"} alignItems="center" mx={5}>
                <Image src="/images/ethLogo.png" height={5} width={8} alt="Ethereum Price Logo for baby pepe" />
                <Text fontSize="2xl" fontWeight="bold" color="white" mx={2}           textShadow="0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black"
                >
                  Eth Price: ${parseFloat(ethPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
              </Flex>
            </React.Fragment>
          ))}
        </Flex>
      )}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Change to -100% to show all text */
          }
        }
        .ticker {
          display: inline-flex; /* Ensures flex items align in a row */
          padding: 0; /* Adjust padding as necessary */
        }
      `}</style>
    </Box>
  );
};

export default MarketCapVolume;
