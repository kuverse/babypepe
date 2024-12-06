import type { Metadata } from "next";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/components/theme";
import { ThirdwebProvider } from "thirdweb/react";


export const metadata: Metadata = {
  title: "Baby Pepe | Pepe's Only Baby Boy",
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
      <title>Baby Pepe | Pepes Only Baby Boy</title>
    </head>

      
      <body>
        
        <ChakraProvider theme={theme}>
          <ThirdwebProvider>
          {children}
          </ThirdwebProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
