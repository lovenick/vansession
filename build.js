require('dotenv').config();
const Metalsmith = require('metalsmith');
const markdown   = require('metalsmith-markdown');
// const templates  = require('metalsmith-templates');
const layouts  = require('metalsmith-layouts');
const contentful = require('contentful-metalsmith');

Metalsmith(__dirname)
  // .use(templates('handlebars'))
  .use(contentful({ 
    'access_token': process.env.CONTENTFUL_TOKEN,
    'space_id': process.env.CONTENTFUL_SPACE_ID
  }))
  .use(layouts({ engine: 'handlebars' }))
  .use(markdown())
  .destination('./public')
  .build((err) => {
    if(err) console.log(err);
  });