require('dotenv').config();
const Metalsmith   = require('metalsmith');
const markdown     = require('metalsmith-markdown');
const dataMarkdown = require('metalsmith-data-markdown');
const layouts      = require('metalsmith-layouts');
const contentful   = require('contentful-metalsmith');
// const glob         = require('glob')
// const images       = require('metalsmith-project-images');
// const debug        = require('metalsmith-debug');
// const templates    = require('metalsmith-templates');

Metalsmith(__dirname)
  .destination('./public')
  .use(contentful({
    'access_token': process.env.CONTENTFUL_TOKEN,
    'space_id': process.env.CONTENTFUL_SPACE_ID
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(markdown())
  .use(dataMarkdown({
    removeAttributeAfterwards: true
  }))
  // .use(images({
  //   pattern: 'public/**/*.html',
  //   imagesDirectory: './public/img'
  // }))
  // .use(debug())
  .build((err) => {
    if(err) console.log(err);
    if(!err) console.log('Success!');
  });
