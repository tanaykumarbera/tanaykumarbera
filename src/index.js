import renderLandingPage from './templates/index';
import renderErrorPage from './templates/index';

import styleLandingPage from './less/index';
import styleErrorPage from './less/error';

import config from '../config';

export default () => ({
  '/index.html': renderLandingPage({ config, styleLandingPage }),
  '/error.html': renderErrorPage({ config, styleErrorPage })
});
