"use client";

import Header from "@/components/Header";
import WhitePaper from "@/components/WhitePaper";
import { Box } from "@chakra-ui/react";

const WhitePaperPage: React.FC = () => {
  return (
    <>
  <Header />
  <Box h="80px" /> {/* Spacer */}
  <Box
    minHeight="200vh"
    bg="#6CB947"
    p={{ base: 10, md: 10 }}
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <WhitePaper />
  </Box>
</>

  );
};
export default WhitePaperPage;
