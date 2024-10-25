"use client";

import { Flex, IconButton} from "@chakra-ui/react";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import TokenomicsSection from "./Tokenomics";
import FriendsBox from "./FriendsBox";
import SwapBabyPepe from "./Uniswap";
import AboutBox from "./AboutBox";
import FlappySection from "./FlappyCard";
import TitleComponent from "./TitleComponent";
import BuyWithCreditCard from "./BuyWithCreditCard";
import JoinSection from "./JoinSection";
import MarketCapVolume from "./MarketCap";
import SwapBuyButtons from "./BuyAndSwapButtons";
import RoadMapSection from "./RoadMap";

const LandingPage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        setShowScrollTop(scrollY > 300); // Show button after scrolling down 300px
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, white 15%, #8AF855 20%, #8AF855 30%, #187235 100%)" // Gradient from white to green starting at 60%
      transition="background-color 0.3s ease"
    >
      <Header />

      <TitleComponent />
      <MarketCapVolume />

      <SwapBuyButtons />

      <AboutBox />
      <TokenomicsSection />
{/*}
      <Section
        id="join-us"
        title="Join the Telegram"
        subtitle="Started from the bottom"
        thirdElement=""
        bgImage="/images/background03.png"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          mt="2"
        >
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 3 }}
          >
            <Button
              as="a"
              href="https://t.me/BabyPepeGo"
              backgroundColor="#6CB947"
              color="white"
              padding="30px 75px"
              borderRadius="8px"
              fontSize="45px"
              mt={-300}
              cursor="pointer"
              transition="all 0.3s"
              border="4px solid white"
              fontFamily="'SecondaryFont', sans-serif"
              _hover={{ transform: "scale(1.1)", backgroundColor: "#4A9F33" }}
            >
              <FaTelegram size={30} style={{ marginRight: "10px" }} />
              Join
            </Button>
          </motion.div>
        </Flex>
      </Section>
*/}
      <FlappySection />
      <FriendsBox />
      <SwapBabyPepe />
      <RoadMapSection />
      <BuyWithCreditCard />
      <JoinSection />
      <Footer />
      <MusicPlayer />

      {showScrollTop && (
      <IconButton
        icon={<ArrowUpIcon />}
        aria-label="Scroll to Top"
        zIndex={3000}
        onClick={scrollToTop}
        position="fixed"
        bottom={1}
        right={1}
        size="lg" // This controls the base size of the button
        bgGradient="linear(to-b, #6CB947 30%, #187235 100%)"
        _hover={{ bg: "#156D30" }}
        borderRadius="15px"
        boxShadow="lg"
        border="2px solid white"
        padding="30px 20px" // Add padding to increase button size
      />
    )}

    </Flex>
  );
};

export default LandingPage;
