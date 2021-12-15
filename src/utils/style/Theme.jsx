import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary: '#FF0000',
    secondary: '#282D30',
    third: '#74798C',
    black: '#000',
    white: '#FFF',
    lightBackground: '#F7F7F7',
  },
  fontSize: {
    tiny: '0.8rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  fontWeight: {
    regular: '400',
    bold: '500',
    extraBold: '700',
  },
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
