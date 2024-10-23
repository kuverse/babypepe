import { Box, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from '../styles/landingpage.module.css';

const FriendsBox = () => {
  return (
    <Box
      id="friends"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      minHeight="100vh" // Ensures the content scales with the height
      textAlign="center" // Center align text and children
      backgroundImage="/images/blue-sky-clouds-anime-style-600nw-2157978867.webp" // Add background image
      backgroundSize="cover" // Ensure it covers the box
      backgroundPosition="center" // Center the background image
    >
      <Image
        src="/images/friends-title.png"
        className={styles.floatingImage}
        alt="friends title"
        width={{ base: "1200px", md: "90%" }} // Increase width on base and md
        height={{ base: "auto", md: "auto" }} // Maintain aspect ratio
        borderRadius="15px"
        objectFit="contain"
        zIndex={30}
        mt={{ base: "0", md: "0" }} // Adjust margin if necessary
      />

      <Box
        width="100%" // Ensures it spans the full width of the section
        position="absolute" // Keeps it fixed in place within the box
        bottom="20%" // Adjust the vertical position as needed
        left="50%"
        transform="translateX(-50%)" // Center horizontally
        display="flex"
        justifyContent="center"
        zIndex={1} // Ensure it's on top of other content
      >
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 3 }}
          style={{ display: "flex", justifyContent: "space-around", width: "80%" }}
        >
          <Link
            href="/baby-pepe-and-friends"
            fontWeight="bold"
            fontSize={{ base: "22px", md: "40px" }}
            bg="#6CB947"
            color="white"
            width={"100%"}
            px={8}
            py={2}
            mt={{ base: "20px", md: "40px" }} // Adjust margin to avoid pushing the button too far down
            borderRadius="8px"
            textAlign="center"
            border="4px solid white"
            _hover={{ bg: "#156D30", transform: "scale(1.05)" }}
          >
            Watch
          </Link>
        </motion.div>
      </Box>
    </Box>
  );
};

export default FriendsBox;
