"use client";

//import BuyWithCreditCard from "@/app/buy/page";
import { Box, Image} from "@chakra-ui/react";
import { motion } from "framer-motion";
import BubbleChart from "./StackedLogos";

//import BubbleChart from "./StackedLogos";

const TitleComponent: React.FC = () => {

  
  return (
    
    <Box
    position="relative"
    width="100vw"
    minHeight="100vh"
    backgroundImage="/images/blue-sky0.png"
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
          src="/images/mainLogoOutline.png"
          alt="logo main"
          width={{ base: "80%", md: "80%" }}
          borderRadius="15px"
          objectFit="contain"
        />
      </motion.div>

        <BubbleChart />

  </Box>
  );
};

export default TitleComponent;
