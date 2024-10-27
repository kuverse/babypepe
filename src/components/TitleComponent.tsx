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
          top: "35%",
          transform: "translateX(-50%)",
          zIndex: 2,
          pointerEvents: "none",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
 
        <Image
          src="/images/Group 47.png"
          alt="logo main"
          width={{ base: "95%", md: "70%" }}
          borderRadius="15px"
         
        />
      </Box>
      </motion.div>

        <BubbleChart />

  </Box>
  );
};

export default TitleComponent;
