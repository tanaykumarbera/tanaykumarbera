import Handlebars from 'handlebars-template-loader/runtime';

/* IMPORT HANDLEBAR TEMPLATES */
import renderLandingPage from './templates/index';
import renderErrorPage from './templates/index';
import post from './templates/post';

/* IMPORT CORRESSPONDING PAGE STYLES */
import styleLandingPage from './less/index';
import styleErrorPage from './less/error';

/* IMPORT json-ld SCHEMA */
import schemaLandingPage from './schema.json';

/* IMPORT SITE CONFIGURATION */
import config from '../config';

/* REGISTER POST TEMPLATE AS PATIAL */
Handlebars.registerPartial('post', post);

import posts from './tposts.js';

/* EXPORT METHOD TO BE USED BY STATIC SITE GENERATOR */
export default () => ({
  '/index.html': renderLandingPage({
    config,
    style: styleLandingPage,
    schema: JSON.stringify(schemaLandingPage),
    posts
  }),
  '/error.html': renderErrorPage({
    config,
    styleErrorPage
  })
});
