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
  //   fonts: ['sans-serif', 'Roboto'],
  //   fontSizes: {
  //     small: '1em',
  //     medium: '2em',
  //     large: '3em',
  //   },
};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
