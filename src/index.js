import renderLandingPage from './templates/index';
import renderErrorPage from './templates/index';

import styleLandingPage from './less/index';
import styleErrorPage from './less/error';

import schemaLandingPage from './schema.json';

import config from '../config';

export default () => ({
  '/index.html': renderLandingPage({
    config,
    styleLandingPage,
    schema: JSON.stringify(schemaLandingPage)
  }),
  '/error.html': renderErrorPage({
    config,
    styleErrorPage
  })
});
