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
import JoinSection from "./JoinSection";
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
    >
      <Header />

      <TitleComponent />
      <AboutBox />
      <TokenomicsSection />
      <SwapBabyPepe />
      <RoadMapSection />


      <FlappySection />
      <FriendsBox />
      <JoinSection />
      <Footer />
      <MusicPlayer />

      {showScrollTop && (
      <IconButton
        icon={<ArrowUpIcon color={"#fff"}/>}
        aria-label="Scroll to Top"
        zIndex={3000}
        onClick={scrollToTop}
        position="fixed"
        bottom={1}
        right={1}
        size="lg" // This controls the base size of the button
        backgroundColor= "rgba(0, 0, 0, 0.6)"
        _hover={{ bg: "#156D30" }}
        borderRadius="15px"
        boxShadow="lg"
        border="2px solid white"
        padding="20px 10px" // Add padding to increase button size
      />
    )}

    </Flex>
  );
};

export default LandingPage;
