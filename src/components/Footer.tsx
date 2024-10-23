"use client";

import { Box, Text, Flex} from "@chakra-ui/react";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <Box  as="footer"   bg="#156D30"  color="white"py={4} px={{ base: 4, md: 8 }} width="100%"  mt="auto" >
      <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }}>
       
       <Socials />
        <Text fontSize={{ base: "2vw", md: "1.2vw" }}  mx={5} textAlign={{ base: "center", md: "center" }}  style={{ fontFamily: "'SecondaryFont', sans-serif" }}>
        $babypepe has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
        $BABYPEPE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is run 100% by the community and is completely useless and for entertainment purposes only.        </Text>
        
        <Text fontSize="m" mt={4} textAlign={{ base: "center", md: "left" }} minWidth={"200px"}>
          © 2024 Baby Pepe Community. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
