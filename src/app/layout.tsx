import type { Metadata } from "next";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/components/theme";
import { ThirdwebProvider } from "thirdweb/react";

export const metadata: Metadata = {
  title: "Baby Pepe",
  description: "A viral sensation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="page">
      <head>
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ backgroundColor: "var(--background, #CBCBD2)", minHeight: "100vh" }}>
        <ChakraProvider theme={theme}>
          <ThirdwebProvider>
            {children}
          </ThirdwebProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
