import React, { useContext } from 'react';
import { Platform, Text, View } from 'react-native';

import { ThemeContext } from 'styled-components/native';
import MyThemeContext from '../../context/MyThemeContext';

import Button from '../../components/Button';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};

export default function(props: Props) {
  const myThemeContext = useContext(MyThemeContext);
  const themeContext = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, { color: themeContext.colors.textColor }]}>
        Welcome to React Native!
      </Text>
      <Text style={[styles.instructions, { color: themeContext.colors.textColor }]}>
        To get started, edit App.js
      </Text>
      <Text style={[styles.instructions, { color: themeContext.colors.textColor }]}>
        {instructions}
      </Text>

      <Button onPress={() => myThemeContext.onThemeChanged('dark')}>
        <Text style={{ color: themeContext.colors.textColor }}>Change Theme</Text>
      </Button>
    </View>
  );
}
