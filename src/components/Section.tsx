"use client";

import { ReactNode, useEffect } from "react";
import { useAnimation, motion, Transition, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  thirdElement: ReactNode;
  bgImage: string;
  children?: ReactNode;
}

const sectionTransition: Transition = {
  duration: 1.2,
  ease: [0.42, 0, 0.58, 1],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for child elements
      when: "beforeChildren",
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: sectionTransition },
};

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  thirdElement,
  bgImage,
  children,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
      ref={ref}
      id={id}
      as={motion.div}
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      position="relative"
      overflow="hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants} // Apply container variants
      >
        <motion.div variants={childVariants}>
          <Heading
            mb={-4}
            fontSize={{ base: "12vw", md: "7vw" }}
            textAlign="center"
            fontFamily="'PepeFont', sans-serif"
            color="#6CB947"
            textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"

          >
            {title}
          </Heading>
        </motion.div>

        <motion.div variants={childVariants}>
          <Text
            mb={2}
            fontSize={{ base: "35px", md: "48px" }}
            textAlign="center"
            fontFamily="'SecondaryFont', sans-serif"
            color="#6CB947"
            padding="10px"
            borderRadius="10px"
            textShadow="2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white"
          >
            {subtitle}
          </Text>
        </motion.div>

        {thirdElement && (
          <motion.div variants={childVariants}>
            <Box
              mt={-2}
              textColor="white"
              fontFamily="'SecondaryFont', sans-serif"
              fontSize="32px"
              width="80%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              mx="auto"
              p="5px"
              textShadow="2px 2px 0 #6CB947, -1px 1px 0 white, 1px -1px 0 white"
              borderRadius="10px"
            >
              {thirdElement}
            </Box>
          </motion.div>
        )}
      </motion.div>

      {children && (
        <Box
          mt={6}
          position="absolute"
          top="90%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Section;
