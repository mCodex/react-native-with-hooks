import registerScreens from './screens';

import IntroRoutes from './routes/intro';

registerScreens();

export default function() {
  setTimeout(() => new IntroRoutes(), 50);
}
