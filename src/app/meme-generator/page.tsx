"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Button, Input, Select, Heading, Image, Flex } from "@chakra-ui/react";
import Draggable from "react-draggable";
import Header from "@/components/Header";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

const MemeGenerator: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedOverlay, setSelectedOverlay] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [overlaySize, setOverlaySize] = useState(150);

  const overlayOptions = [
    { src: "/images/pacifier.PNG", label: "Pacifier" },
    { src: "/images/pepep2.png", label: "Baby Pepe" },
    { src: "/images/flying-pepe.png", label: "Flappy Baby Pepe" },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
          setUploadedImage(e.target?.result as string);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateScale = () => {
    const containerWidth = 400; // Preview width
    const scale = containerWidth / imageDimensions.width;
    return scale;
  };

  const drawMeme = async () => {
    if (!canvasRef.current || !uploadedImage) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.src = uploadedImage;

    await new Promise((resolve) => (img.onload = resolve));

    canvasRef.current.width = imageDimensions.width;
    canvasRef.current.height = imageDimensions.height;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.drawImage(img, 0, 0, imageDimensions.width, imageDimensions.height);

    if (selectedOverlay) {
      const overlayImg = new window.Image();
      overlayImg.src = selectedOverlay;

      await new Promise((resolve) => (overlayImg.onload = resolve));

      const scale = calculateScale();
      const normalizedX = overlayPosition.x / scale;
      const normalizedY = overlayPosition.y / scale;

      ctx.drawImage(
        overlayImg,
        normalizedX,
        normalizedY,
        overlaySize / scale,
        overlaySize / scale
      );
    }
  };

  const handleDownload = async () => {
    await drawMeme();

    if (canvasRef.current) {
      const link = document.createElement("a");
      link.href = canvasRef.current.toDataURL("image/png");
      link.download = "custom-meme.png";
      link.click();
    }
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bg="#187235"
        p={5}
      >
        <Heading size="2xl" mb={4} mt={150} color="#6CB947" fontFamily="'PepeFont', sans-serif">
          Meme Generator
        </Heading>

        <Input type="file" accept="image/*" onChange={handleImageUpload} mb={4} maxW={350} color={"#fff"}/>

        <Select
          placeholder="Select Overlay"
          onChange={(e) => setSelectedOverlay(e.target.value)}
          mb={4}
          maxW={350}          
          color={"#fff"}
        >
          {overlayOptions.map((option, index) => (
            <option key={index} value={option.src}>
              {option.label}
            </option>
          ))}
        </Select>

   

        {uploadedImage && (
          <Box
            mt={6}
            position="relative"
            width="400px"
            height={`${(imageDimensions.height / imageDimensions.width) * 400}px`}
            border="4px solid white"
            borderRadius="10px"
            overflow="hidden"
            bg="#A02E00"
          >
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

            <Image
              src={uploadedImage}
              alt="Uploaded Meme"
              width="100%"
              height="100%"
              objectFit="contain"
            />

            {selectedOverlay && (
              <Draggable
                position={overlayPosition}
                onStop={(e, data) =>
                  setOverlayPosition({ x: data.x, y: data.y })
                }
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width={`${overlaySize}px`}
                  height={`${overlaySize}px`}
                  cursor="move"
                >
                  <Image
                    src={selectedOverlay}
                    alt="Overlay"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
              </Draggable>
            )}
          </Box>
        )}
        {selectedOverlay && (
            <Box mt={4} width="300px">
              <Slider
                aria-label="overlay-size"
                value={overlaySize}
                min={50}
                max={300}
                onChange={(val) => setOverlaySize(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="green.500" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          )}


        <Flex direction={"row"} padding={2}>
        <Button backgroundColor="#6CB947" onClick={handleDownload} size="lg">
          Download Meme
        </Button>
        </Flex>
      </Box>
    </>
  );
};

export default MemeGenerator;
