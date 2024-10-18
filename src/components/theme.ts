"use client";

import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        bg: 'var(--background, #CBCBD2)', // Use fallback color if var isn't working
        color: 'var(--foreground, #156D30)',
        fontFamily: 'PepeFont, sans-serif',
        minHeight: '100%',
        margin: 0,
        padding: 0,
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
});

export default theme;
