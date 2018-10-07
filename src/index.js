import Handlebars from 'handlebars-template-loader/runtime';

/* IMPORT HANDLEBAR TEMPLATES */
import renderLandingPage from './templates/index';
import renderTwitterFeed from './templates/twitter-feed';
import post from './templates/post';
import renderPrivacyPolicy from './templates/privacy';

/* IMPORT CORRESSPONDING PAGE STYLES */
import styleLandingPage from './less/index';
import styleTwitter from './less/twitter-feed';
import stylePrivacy from './less/privacy';

/* IMPORT json-ld SCHEMA */
import schemaLandingPage from './schema.json';

/* IMPORT AMP ANALYTICS TRACKER SETUP */
import tracker from './tracker.json';

/* IMPORT SITE CONFIGURATION */
import config from '../config';
import roadrooster from './policies/roadrooster'

/* REGISTER POST TEMPLATE AS PATIAL */
Handlebars.registerPartial('post', post);

/* EXPORT METHOD TO BE USED BY STATIC SITE GENERATOR */
export default () => ({
  '/index.html': renderLandingPage({
    config,
    style: styleLandingPage,
    schema: JSON.stringify(schemaLandingPage),
    tracker: JSON.stringify(tracker)
  }),
  '/twitter-feed.html': renderTwitterFeed({
    config,
    style: styleTwitter
  }),
  '/appusage/privacy/roadrooster.html': renderPrivacyPolicy({
    app: roadrooster,
    style: stylePrivacy
  })
});
