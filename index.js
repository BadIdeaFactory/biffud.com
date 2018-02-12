// basic build

'use strict';

var
  metalsmith  = require('metalsmith'),
  markdown    = require('metalsmith-markdown'),
  publish     = require('metalsmith-publish'),
  collections = require('metalsmith-collections'),
  permalinks  = require('metalsmith-permalinks'),
  partials    = require('metalsmith-discover-partials'),
  layouts     = require('metalsmith-layouts'),
  sitemap     = require('metalsmith-mapsite'),
  assets      = require('metalsmith-assets'),
  debug       = require('metalsmith-debug')

var
  dir = {
    base:   __dirname + '/',
    lib:    __dirname + '/lib/',
    source: './src/',
    dest:   './build/',
    assets: './assets/'
  }

var
  siteMeta = {
    name:     'Bad Idea Factory',
    desc:     'Bad Idea Factory is a technical comedy troupe with a corporate structure.',
    author:   'Bad Idea Factory, Limited Liability Company',
    contact:  'https://twitter.com/biffud',
    domain:   'https://biffud.com',
    rootpath:  null
  }

var
  layoutConfig = {
    engine:    'handlebars',
    partials:  'partials'
  }

var
  collectionConfig = {
    page: {
      pattern:    '**/index.*',
      sortBy:     'priority',
      reverse:    true,
      refer:      false
    },
    project: {
      pattern:    'projects/*',
      sortBy:     'priority',
      reverse:    true,
      refer:      true,
      metadata: {
        layout:   'project.hbs'
      }
    }
  }

var permalinksConfig = {
   pattern: ':mainCollection/:title'
}

var partialsConfig = {
  "directory": "partials"
}

var
  assetsConfig = {
    source:      dir.assets,
    destination:  './'
  }

var ms = metalsmith(dir.base)
  .clean(true)                        // clean build before a production build
  .source(dir.source)                 // source directory
  .destination(dir.dest)              // build directory (build/)
  .metadata(siteMeta)                 // add meta data to every page
  .use(publish())
  .use(collections(collectionConfig)) // determine page collection/taxonomy
  .use(markdown())                    // convert Markdown
  .use(permalinks(permalinksConfig))  // generate permalinks
  .use(partials(partialsConfig))
  .use(layouts(layoutConfig))
  .use(assets(assetsConfig))          // copy assets: CSS, images etc.
  .use(debug())                       // lets be honest, we need debug output
  .build(function(err) {              // run the build
     if (err) throw err;
   });

