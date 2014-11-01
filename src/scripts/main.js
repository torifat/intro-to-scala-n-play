// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state');

// Bespoke.js
bespoke.from('article', [
  cube(),
  classes(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  state()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism/components/prism-core');
require('prism/components/prism-markup');
require('prism/components/prism-css');
require('prism/components/prism-clike');
require('prism/components/prism-javascript');
require('prism/components/prism-java');
require('prism/components/prism-scala');
require('prism/components/prism-bash');

Prism.languages.insertBefore('bash', 'comment', {
  'important': /\b(activator)\b/g
});

Prism.languages.insertBefore('bash', 'keyword', {
  'property': /\b(new)\b/g
});
