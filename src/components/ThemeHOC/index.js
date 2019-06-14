import React, { useState } from 'react';
import { View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import MyThemeContext from '../../context/MyThemeContext';

import light from './themes/light';
import dark from './themes/dark';

export default function(WrappedComponent) {
  const ThemeHOC = props => {
    const [activeTheme, setActiveTheme] = useState('light');

    const theme = activeTheme === 'light' ? light : dark;

    return (
      <ThemeProvider theme={theme}>
        <MyThemeContext.Provider
          value={{ activeTheme, onThemeChanged: mode => setActiveTheme(mode) }}
        >
          <View style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}>
            <MyThemeContext.Consumer>
              {themeContextProps => <WrappedComponent {...props} {...themeContextProps} />}
            </MyThemeContext.Consumer>
          </View>
        </MyThemeContext.Provider>
      </ThemeProvider>
    );
  };
  return ThemeHOC;
}
