const Metalsmith = require('metalsmith');
const markdown   = require('metalsmith-markdown');
const templates  = require('metalsmith-templates');

Metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .destination('./public')
  .build((err) => {
    if(err) console.log(err);
  });