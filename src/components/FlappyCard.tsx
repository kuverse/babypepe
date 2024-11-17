"use client";

import { Box, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '../styles/landingpage.module.css';
import Section from "./Section";


const FlappySection: React.FC = () => {
  return (
    <Section
      id="flappy1"
      title="Flappy Baby Pepe"
      subtitle="Play the mini game"
      thirdElement=""
      bgImage="/images/greenSky.png"
    >


      <Box
        position="absolute"
        top="80%"
        left="50%"
        transform="translate(-50%, -250%)"
        zIndex={1000}
        width="200%"
        overflow="hidden"
        height="100px"
        marginTop={-20}
      >
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Image
            src="/images/pepebottle2 136.png"
            alt="Baby Pepe Bottle"
            width="100px" 
            height="auto"
            style={{ pointerEvents: "none" }} // Disable pointer events if not needed
          />
        </motion.div>
      </Box>


      <Box display="flex" justifyContent="center" marginTop="-620px">
        <Image
          className={styles.floatingImage}
          src="/images/flying-pepe.png"
          alt="flappy Babye pepe"
          width={{ base: "60%", md: "30%" }}
          borderRadius="15px"
          objectFit="contain"
        />
      </Box>


      <Box
        position="absolute" // Keeps the button fixed in place within the section
        top="85%"
        left="50%"
        width={"100%"}
        transform="translate(-50%, -190%)" // Center horizontally and vertically
        zIndex={1000} // Ensure it's above other content
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 3 }}
          style={{ display: "flex", justifyContent: "center", width: "100%" }} // Use width: 100% for full-width alignment
        >
          <Link
            href="/flappy-baby-pepe"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "40px" }}
            backgroundColor="rgba(0, 0, 0, 0.6)"
            color="white"
            width={"100%"}
            px={8}
            py={4}
            borderRadius="8px"
            textAlign="center"
            border="4px solid white"
            _hover={{ bg: "#006821", transform: "scale(1.05)" }}
          >
            Play
          </Link>
        </motion.div>
      </Box>
      
      <Box
        position="absolute"
        top="80%"
        left="50%"
        transform="translate(-50%, -250%)"
        zIndex={2000}
        width="200%"
        height="55px"
        pointerEvents={"none"}
        
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Image
            src="/images/cloud.png"
            alt="baby pepe cloud"
            width="250px" 
            height="auto"
            style={{ pointerEvents: "none" }} // Disable pointer events if not needed
          />
        </motion.div>
      </Box>
    </Section>
  );
};

export default FlappySection;
