// myTheme.js
import { createTheme } from '@aws-amplify/ui-react';

export const myTheme = createTheme({
  name: 'MyTheme',
  tokens: {
    colors: {
      brand: {
        primary: { value: '#ffffff' }, // or whatever color
      },
    },
  },
});
