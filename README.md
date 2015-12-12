# jstransformer-hamlet

[Hamlet](https://github.com/gregwebs/hamlet.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-hamlet/master.svg)](https://travis-ci.org/jstransformers/jstransformer-hamlet)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-hamlet/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-hamlet?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-hamlet/master.svg)](http://david-dm.org/jstransformers/jstransformer-hamlet)
[![NPM version](https://img.shields.io/npm/v/jstransformer-hamlet.svg)](https://www.npmjs.org/package/jstransformer-hamlet)

## Installation

    npm install jstransformer-hamlet

## API

```js
var hamlet = require('jstransformer')(require('jstransformer-hamlet'));

var template = '<div>\n  <span>Hi, #{hamlet}!';
var locals = {hamlet: 'world'};

hamlet.compile(template).fn(locals);
//=> '<div><span>Hi, world!</span></div>'

hamlet.render(template, locals).body;
//=> '<div><span>Hi, world!</span></div>'
```

## License

MIT
