// src/theme/index.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#f0f8ff', // Set global background color
        fontFamily: "'Arial', sans-serif", // Set global font family
        margin: 0, 
        padding: 0, 
      },
      html: {
        height: '100%',
      },
      '#root': {
        height: '100%', // Ensure the root element takes full height
      },
    },
  },
});

export default theme;
