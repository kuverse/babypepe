"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  subtitle: string;
  thirdElement: string;
  bgImage: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  thirdElement,
  bgImage,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset if not in view
    }
  }, [inView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1, // Slow down the animation
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
      },
    },
    hidden: {
      opacity: 0,
      y: 200, // Increased distance for more exaggerated float-in effect
      scale: 0.95, // Slight scaling for more emphasis
    },
  };

  return (
    <Box
      ref={ref}
      as={motion.div}
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <Heading mb={4} fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
          {title}
        </Heading>
        <Text mb={2} fontSize={{ base: "lg", md: "xl" }} textAlign="center">
          {subtitle}
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
          {thirdElement}
        </Text>
      </motion.div>
    </Box>
  );
};

export default Section;
