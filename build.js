require('dotenv').config();
const Metalsmith = require('metalsmith');
const markdown   = require('metalsmith-markdown');
const templates  = require('metalsmith-templates');
const contentful = require('contentful-metalsmith')({ 'access_token' : process.env.CONTENTFUL_TOKEN })

Metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .use(contentful)
  .destination('./public')
  .build((err) => {
    if(err) console.log(err);
  });