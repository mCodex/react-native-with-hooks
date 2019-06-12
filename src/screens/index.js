import { Navigation } from 'react-native-navigation';

import themeHOC from '../components/ThemeHOC';

import Home from './Home';

export default function() {
  Navigation.registerComponent('rnproject.Home', () => themeHOC(Home));
}
