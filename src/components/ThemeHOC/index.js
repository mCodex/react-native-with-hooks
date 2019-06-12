import React, { useContext } from 'react';
import { View } from 'react-native';

import { ThemeProvider, ThemeContext } from 'styled-components/native';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';

export default function(WrappedComponent) {
  const ThemeHOC = props => {
    return (
      <ThemeProvider theme={darkTheme}>
        <View style={{ flex: 1, backgroundColor: darkTheme.colors.backgroundColor }}>
          <WrappedComponent {...props} />
        </View>
      </ThemeProvider>
    );
  };
  return ThemeHOC;
}
