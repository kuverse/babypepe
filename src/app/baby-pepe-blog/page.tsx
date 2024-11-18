"use client";

import Header from "@/components/Header";
import { Box, Heading, Image, Text, VStack, Grid, GridItem } from "@chakra-ui/react";

const Blog: React.FC = () => {
  return (
    <>
      <Header />

      <Box
        minHeight="100vh"
        bg="#6CB947"
        p={{ base: 4, md: 10 }} // Responsive padding
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          mt={100}
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          fontFamily="'PepeFont', sans-serif"
        >
          The Baby Pepe Blog
        </Heading>

        <VStack spacing={2} mb={8}>
          <Heading as="h3" size={{ base: "md", md: "lg" }} color="#fff" fontFamily="'SecondaryFont', sans-serif" textAlign="center">
            Now you know.
          </Heading>
        </VStack>

        {/* Blog Posts Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Responsive columns
          gap={8}
          maxW="1200px"
          w="100%"
        >
          {/* Blog Post 1 */}
          <GridItem>
            <Box
              bg="white"
              borderRadius="md"
              shadow="lg"
              overflow="hidden"
              p={4}
              display="flex"
              flexDirection="column"
              color="gray.600"
              fontFamily="'SecondaryFont', sans-serif" // Consistent font for the body
            >
              <Image
                src="/logos/babyPepe.JPG"
                alt="Blog Image"
                borderRadius="md"
                mb={4}
                height="250px"
                objectFit="cover"
              />
              <Heading as="h1" fontSize={"30px"} color="#A02E00" fontFamily="'PepeFont', sans-serif"  p={5}>
                What is Baby Pepe?
              </Heading>



                <Text color="gray.600" fontFamily="'SecondaryFont', sans-serif">
                Baby Pepe ($BABYPEPE) is a community-driven memecoin born from the success of its &quot;daddy&quot; $PEPE.
                Operating on the Ethereum blockchain with a unique &quot;0x69babE&quot; contract identifier, it serves as an extension of the Pepeverse ecosystem.
                </Text>
                <Text mt={4}>
                The crypto market has always been a space of cycles, narratives, and groundbreaking stories. Among the most intriguing narratives in recent times is the rise of Baby Pepe ($BABYPEPE). Following in the giant footsteps of its &quot;daddy&quot; $PEPE, Baby Pepe&apos;s journey is nothing short of legendary, filled with resilience, ambition, and an unwavering community spirit. With a bright future ahead, it is poised to be a key player in this bull cycle, just as $BABYDOGE mirrored $DOGE&apos;s success.
                </Text>
                <Text mt={4}>
                Here&apos;s the captivating story of Baby Pepe&apos;s journey, challenges, and the immense potential that lies ahead.
                </Text>


              <Heading as="h2" size="lg" color="#A02E00"  fontFamily="'PepeFont', sans-serif" my={6}>
              Baby Pepe and Daddy Pepe: A Powerful Connection               
              </Heading>
              <Text color="gray.600" fontFamily="'SecondaryFont', sans-serif">
                Baby Pepe ($BABYPEPE) owes its existence to the memecoin powerhouse, $PEPE. Much like how $BABYDOGE rode the wave of $DOGE&apos;s dominance to reach a staggering $1 billion market cap, Baby Pepe aims to capitalize on $PEPE&apos;s meteoric rise. With $PEPE already valued at $10 billion and potentially set to soar to $50-100 billion at the peak of the next bull cycle, Baby Pepe appears vastly undervalued at its current market cap of around $15-20 million. 
                </Text>
                <Text mt={4}>
                If history is any indication, the opportunity for Baby Pepe to mirror the growth of $BABYDOGE is immense, suggesting potential market cap growth to $400 million if $PEPE reaches $50 billion.
              </Text>


              <Heading as="h2" size="lg" color="#A02E00"  fontFamily="'PepeFont', sans-serif"  my={6}>
                  Baby Pepe&apos;s Rise from the Ashes: Overcoming Early Challenges               
              </Heading>
              <Text color="gray.600" fontFamily="'SecondaryFont', sans-serif">

              The journey of Baby Pepe has been far from smooth. Launched on May 24, it faced an early setback when its initial developer abandoned the project below a $1 million market cap. However, in true underdog fashion, a small group of dedicated community members took charge, revitalizing the project and driving it to a $10 million market cap. 
              </Text>
              <Text mt={4}>
              This resurgence established Baby Pepe as a frontrunner in the &quot;baby&quot; meta of the Pepeverse, inspired by the work of artist Matt Furie.
              Even amid a heavy market downturn, the Baby Pepe community demonstrated remarkable resilience. 
              </Text>
              <Text mt={4}>
              
              The project faced off against a cabal-backed rival token, which ultimately failed. It weathered significant setbacks, such as influencer James Wynn scamming the team and dumping $70,000 worth of tokens on the chart. Yet, the CTO team and the community persevered, pushing the token back up from a low of $180,000 to its current range of $15-20 million. 
              Baby Pepe&apos;s story is a testament to the power of collective strength and vision in crypto.
              </Text>

            <Heading as="h2" size="lg" color="#A02E00" fontFamily="'PepeFont', sans-serif" my={6}>
            Baby Pepe&apos;s Unique DNA and Strong Community            
            </Heading>
            <Text>

            Baby Pepe&apos;s unique selling points set it apart from the crowd. At its core, the token shares a smart contract &quot;DNA&quot; with $PEPE, underscored by the &quot;0x69babE&quot; identifier that signifies its place within the Pepeverse. This technical connection amplifies Baby Pepe&apos;s credibility and appeal. Additionally, the acquisition of the top-level domain babypepe.com signals the team&apos;s commitment to building a strong brand and a professional presence.
            </Text>
            <Text mt={4}>
            Beyond its technical aspects, Baby Pepe is defined by its strong, loyal community. Daily engagements on platforms like Telegram and X (formerly Twitter) are the lifeblood of the project, fostering a tight-knit group of supporters. Moreover, prominent venture capitalists and influencers regularly participate in X Spaces, discussing the project&apos;s potential and driving visibility.
            </Text>
            <Text mt={4}>
            This community-driven approach is a key differentiator, positioning Baby Pepe as a leading contender among emerging memecoins.
            </Text>
            

              <Heading as="h2" size="lg" color="#A02E00" fontWeight="bold" fontFamily="'PepeFont', sans-serif" mt={6}>
                Baby Pepe&apos;s Leadership: Commitment and Dedication
              </Heading>
              <Text mt={4}>
                The CTO team behind Baby Pepe comprises around 10 experienced crypto professionals and notable whales who have poured their hearts—and wallets—into the project. Collectively, they have invested tens of thousands of dollars to support the token&apos;s rebranding efforts, website development, and ongoing monthly fees for top-tier art designer studio Skult.
              </Text>
              <Text mt={4}>
                Most of the project&apos;s marketing wallet has been funded by the CTO team and approximately 20 top holders, underscoring their commitment and belief in Baby Pepe&apos;s future.
              </Text>

              <Heading as="h3" size="lg" color="#A02E00" fontWeight="bold" fontFamily="'PepeFont', sans-serif" mt={6}>
                Rebranding for the Future: Baby Pepe&apos;s Professional Transformation
              </Heading>
              <Text mt={4}>
                One of Baby Pepe&apos;s key initiatives is its rebranding effort, aimed at elevating its visual and professional appeal. Moving away from AI-generated art, the project has invested in high-quality, hand-drawn art for its socials and upcoming website.
              </Text>
              <Text mt={4}>
                This transformation reflects a broader commitment to establishing consistent brand guidelines and a polished identity, crucial for capturing a broader audience and standing out in a crowded market.
              </Text>

              <Heading as="h3" size="lg" color="#A02E00" fontWeight="bold" fontFamily="'PepeFont', sans-serif"  mt={6}>
                Baby Pepe&apos;s Strategic Moves: CEX Listings and Beyond
              </Heading>
              <Text mt={4}>
                In a bid to expand its reach, Baby Pepe is in active discussions with several centralized exchanges (CEXs). It has already secured green lights for listings on platforms like Bitmart and MEXC, with more tier 2 exchanges likely to follow.
              </Text>
              <Text mt={4}>
                The ultimate goal is to achieve a coveted Binance listing, mirroring the trajectory of $PEPE and $BABYDOGE. The team is finalizing OTC deals to convert tokens into stablecoins to cover listing fees, further showcasing their strategic acumen.
              </Text>

              <Heading as="h3" size="lg" color="#A02E00" fontWeight="bold" fontFamily="'PepeFont', sans-serif"  mt={6}>
                Baby Pepe&apos;s Bright Future: Poised for Expansion and Growth
              </Heading>
              <Text mt={4}>
                As the market enters a new bull cycle, Baby Pepe is uniquely positioned to capitalize on the momentum. With a perfect chart in its accumulation phase, a passionate community, and a well-coordinated leadership team, it embodies the potential to follow in the footsteps of its &quot;daddy&quot; $PEPE and carve out its own legacy.
              </Text>
              <Text mt={4}>
                The #2 holder, a $PEPE whale with over $5 million worth of $PEPE, has consistently shown faith in Baby Pepe by accumulating tokens without selling—a strong indicator of confidence in its future.
              </Text>

              <Heading as="h3" size="lg" color="#A02E00" fontWeight="bold" fontFamily="'PepeFont', sans-serif" mt={6}>
                Closing Thoughts: A Strong Proposition
              </Heading>
              <Text mt={4}>
                In conclusion, Baby Pepe is more than just another memecoin; it is the strongest beta play for one of the main tokens of this bull cycle. Its journey from humble beginnings to its current standing is a tale of resilience, determination, and community strength.
              </Text>
              <Text mt={4}>
                With a bright future ahead, the stars seem to be aligning for Baby Pepe to follow in the footsteps of its predecessors, delivering substantial value to its holders and carving out a place in crypto history.
              </Text>

              <Text mt={4}>
                Whether you&apos;re a seasoned investor or a curious onlooker, Baby Pepe&apos;s story is one worth watching—and perhaps even becoming a part of.
              </Text>
            </Box>
          </GridItem>

          {/* Blog Post 2 */}
          <GridItem>
            <Box
              bg="white"
              borderRadius="md"
              shadow="lg"
              overflow="hidden"
              p={4}
              display="flex"
              flexDirection="column"
            >
              <Image
                src="/videos/00.png"
                alt="Blog Image"
                borderRadius="md"
                mb={4}
                height="250px"
                objectFit="cover"
              />
              <Heading as="h3" fontSize={"15px"} fontFamily="'SecondaryFont', sans-serif" textAlign="center">
                More Blogs from Baby Pepe Coming soon!
              </Heading>

            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Blog;
