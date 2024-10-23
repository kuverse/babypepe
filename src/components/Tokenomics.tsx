import { useAnimation, motion, Transition, Variants } from "framer-motion";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const transition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
};

// Wrapper variants with staggerChildren for staggered animations
const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

// Individual item animation variants
const itemVariants: Variants = {
  visible: { opacity: 1, y: 0, transition },
  hidden: { opacity: 0, y: 50 },
};

const TokenomicsSection: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <Box
      id="tokenomics"
      backgroundImage="/images/pepe-stocks.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      p={5}
    >
      <Heading
        as="h1"
        mb={2}
        width={"80%"}
        fontSize={{ base: "60px", md: "80px" }}
        textAlign="center"
        color="#6CB947"
        fontFamily="'PepeFont', sans-serif"
        textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
      >
        Tokenomics
      </Heading>

      <Text
        mb={4}
        fontSize={{ base: "35px", md: "44px" }}
        textAlign="center"
        color="#6CB947"
        fontWeight={"bold"}
        fontFamily="'SecondaryFont', sans-serif"
        textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
      >
        The financial structure
      </Text>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ width: "75%" }} // Limit text bars to 75% width
      >
        <VStack spacing={5} alignItems="center" mt={4}>
          {[
            "Total Supply 420.69B",
            "0% Sell Tax & 0% Buy Tax",
            "Liquidity pool roasted to oblivion.",
            "Contract Renounced.",
            "0x69babE9811CC86dCfC3B8f9a14de6470Dd18EDA4",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                width: "100%", 
                display: "flex", 
                justifyContent: "center" 
              }}
            >
              <Text
                fontSize={{ base: "20px", md: "25px" }}
                color="white"
                p={2}
                borderRadius="8px"
                minW={"70%"}
                bg="rgba(0, 0, 0, 0.6)"
                backgroundColor="#6CB947"
                opacity={0.9}
                border="2px solid white"
                textAlign="center" 
                fontFamily="'SecondaryFont', sans-serif"
                // Center align text inside the bars
              >
                {text}
              </Text>
            </motion.div>
          ))}
        </VStack>
      </motion.div>
    </Box>
  );
};

export default TokenomicsSection;
