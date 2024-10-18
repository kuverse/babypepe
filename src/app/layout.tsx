import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";



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
    <html lang="en">
      <body>
      <ChakraProvider>

        {children}
        </ChakraProvider>

      </body>
    </html>
  );
}
