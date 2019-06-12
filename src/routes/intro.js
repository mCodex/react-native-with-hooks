import { Navigation } from 'react-native-navigation';

export default function introRoutes() {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'rnproject.Home'
            }
          }
        ]
      }
    }
  });
}
