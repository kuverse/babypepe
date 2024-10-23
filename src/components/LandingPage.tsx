"use client";

import { Flex, Box, Image, IconButton, Link, Button } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import Section from "../components/Section";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import Socials from "./Socials";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import styles from '../styles/landingpage.module.css'
import BubbleChart from "./StackedLogos";
import { FaTelegram } from "react-icons/fa";
import TokenomicsSection from "./Tokenomics";
import GameSection from "./GameSection";

const transition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

const LandingPage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showIframe, setShowIframe] = useState(false);





  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.href.split("#")[0]);
      }
    }
  }, []);

  // Handle scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0); // Ensure the page loads at the top
    }
  }, []);

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowScrollTop(window.scrollY > 300);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
    <Header />
    <Flex direction="column" align="center" justify="center">
      <Box
        position="relative"
        width="100vw"
        minHeight="100vh"
        backgroundImage="/images/background-image.png"
        backgroundSize="cover"
        backgroundPosition="center"
        overflow="visible"
      >
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "40%",
              left: "16%",
              transform: "translateX(-50%)",
              zIndex: 2,
              pointerEvents: "none",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <Image
              src="/images/logo-main.png"
              alt="logo main"
              width={{ base: "80%", md: "80%" }}
              borderRadius="15px"
              objectFit="contain"
            />
          </motion.div>
      </Box>




    <Section
        id="about"
        title="About Us"
        subtitle="The Original Baby Pepe"
        thirdElement="All the whales know about the true cultural narrative of the 0x69babe contract address. We are the original. Its in the DNA."
        bgImage="/images/pepe-bedroom2.png"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-100px", // Use a negative margin to move it closer
          }}
        >
         <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 2 }}
            style={{ display: "flex", justifyContent: "center", width: "80%", margin: "0 auto" }} // Centering with auto margins
          >
            <Socials size={40} />
          </motion.div>

      </motion.div>
    </Section>

   
    <TokenomicsSection />



    <Section
        id="flappy1"
        title="Flappy Baby Pepe"
        subtitle="flap. flap. flap."
        thirdElement="Play the mini game"
        bgImage="/images/blue-sky-clouds-anime-style-600nw-2157978867.webp"
      >
      <Box display="flex" justifyContent="center" marginTop="-600px">
        <Image
          className={styles.floatingImage}
          src="/images/flying-pepe.png"
          alt="flappy pepe"
          width={{ base: "60%", md: "40%" }}
          borderRadius="15px"
          objectFit="contain"
        />
      </Box>

      <Box
        position="absolute" // Change to absolute for better centering
        top="80%"
        left="50%"
        transform="translate(-50%, -200%)" // Center horizontally and vertically
        zIndex={1000} // Ensure it's above other content
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 3 }}
          style={{ display: "flex", justifyContent: "center", width: "100%" }} // Use width: 100% for full-width alignment
        >
          <Link
            href="/#flappy2"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "40px" }}
            bg="#156D30"
            color="white"
            px={5}
            py={2}
            borderRadius="8px"
            textAlign="center"
            border="4px solid white"
            _hover={{ bg: "#6CB947", transform: "scale(1.05)" }}
          >
            Arcade
          </Link>
        </motion.div>
      </Box>

    </Section>





    <Section
        id="friends"
        title=""
        subtitle="The animated series"
        thirdElement="Watch now to find out if baby pepe can be saved from the bear!"
        bgImage="/images/green-sky.png"
        >
            
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            width="100%"
            minHeight="100vh" // Ensures the content scales with the section height
          >
          <Image
            src="/images/friends-title.png"
            className={styles.floatingImage}
            alt="friends title"
            width={{ base: "1200px", md: "90%" }} // Increase width on base and md
            height={{ base: "auto", md: "auto" }} // Maintain aspect ratio
            borderRadius="15px"
            objectFit="contain"
            zIndex={3000}
            mt={{ base: "-1200px", md: "-980px" }}            
          />
          

            <Image
              src="/images/friends-characters.png"
              alt="friends"
              min-width={500} 
              height={110}
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />


          <Box
            width="100%" // Ensures it spans the full width of the section
            position="absolute" // Keeps it fixed in place within the section
            bottom="65%" // Adjust the vertical position as needed
            left="50%" 
            transform="translateX(-50%)" // Center horizontally
            display="flex"
            justifyContent="center"
            zIndex={1} // Ensure it's on top of other content
              >


        <motion.div
          initial={{ opacity: 0, y: -150  }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 5, duration: 3 }}
          style={{ display: "flex", justifyContent: "space-around", width: "80%" }}
        >     

          <Link
            href="/baby-pepe-and-friends"
            fontWeight="bold"
            fontSize={{ base: "22px", md: "40px" }}
            bg="#156D30"
            color="white"
            width={"100%"}
            px={8}
            py={2}
            mt={{ base: "200px", md: "160px" }} // Avoid using large margins that push the button around
            borderRadius="8px"
            textAlign="center"
            border="4px solid white"
            _hover={{ bg: "#6CB947", transform: "scale(1.05)"}}
          >
            Watch
          </Link>
          </motion.div>
          </Box>
          </Box>
    </Section>

   





    <GameSection />



      <Section
      id="how-to-buy2"
      title="Buy with Credit Card"
      subtitle="An easy on-ramp"
      thirdElement="Powered by thirdweb"
      bgImage="/images/background3.webp"
    >
   
  <Flex
    direction="column"
    align="center"
    justify="center"
    minHeight="100vh" // Take full height of the section
    gap={6} // Space between items
    mt={-290} // Move everything up
  >
    

    <Button
      as="a"
      href="/buy"
      backgroundColor="#6CB947"
      color="white"
      padding="22px 64px"
      borderRadius="8px"
      fontSize="25px"
      cursor="pointer"
      transition="all 0.3s"
      border= "4px solid white"
      fontFamily="'SecondaryFont', sans-serif"


      _hover={{ transform: "scale(1.1)", backgroundColor: "#4A9F33" }}
    >
      Lets Go
    </Button>
  </Flex>
    </Section>


    <Section
      id="how-to-buy"
      title="Swap Baby Pepe"
      subtitle="Available on Uniswap"
      thirdElement=""
      bgImage="/images/uniswap1.png"
    >
  <div
    style={{
      width: "100%",
      height: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px"
    }}
  >
    {!showIframe ? (
      <button
        onClick={() => setShowIframe(true)}
        className={styles.uniswapButton}
        style={{
          display: 'flex',
          alignItems: 'center', // Center align the logo and text
          justifyContent: 'center'
        }}
      >
        <Image
          src="/logos/uniswap-white.png"
          alt="Uniswap Logo"
          style={{
            width: "50px", 
            height: "auto",
            marginRight: "8px" 
          }}
        />
        <span style={{marginTop: "8px"}}>Open</span>
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
  </div>
    </Section>


    <Section
      id="links"
      title="More Links"
      subtitle="Just dumped everywhere"
      thirdElement=""
      bgImage="/images/dumping.png"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        width="100%"
        height="200vh"
        padding="20px"
      >
        <BubbleChart />
      </Box>
    </Section>

    <Section
      id="join-us"
      title="Join the Baby Pepe Cult"
      subtitle="Started from the bottom"
      thirdElement="And we just getting started."
      bgImage="/images/pepe-background.webp"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mt="2"
      >
        <Image
          src="/images/cool-pepe.gif"
          alt="cool pepe"
          width={{ base: "50%", md: "30%" }}
          borderRadius="15px"
          objectFit="contain"
          mb={5} 
          mt={40}
          style={{
            filter: 'brightness(1.2) contrast(1.3)',
          }}
        />


        <motion.div
          initial={{ opacity: 0, y: -150  }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 5, duration: 3 }}
        >  
        <button className={styles.uniswapButton}>
          <Link href="https://t.me/BabyPepeGo" target="_blank" rel="noopener noreferrer">
          <Flex direction="row" alignItems="center">
            <FaTelegram size={30} style={{ marginRight: "10px" }} />
            Join
          </Flex>
          </Link>
          </button>

          </motion.div>
        </Flex>
    </Section>


      <Footer />
    </Flex>

      <MusicPlayer />
      {showScrollTop && (
        <IconButton
          icon={<ArrowUpIcon />}
          aria-label="Scroll to Top"
          onClick={scrollToTop}
          position="fixed"
          bottom={10}
          right={10}
          size="lg"
          backgroundColor="#6CB947"
          _hover={{ bg: "#156D30" }}          
          borderRadius="5px"
          boxShadow="lg"
          border="2px solid white"
        />
      )}
    </>
  );
};

export default LandingPage;
