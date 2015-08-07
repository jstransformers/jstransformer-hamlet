# jstransformer-hamlet [![The MIT License][license-img]][license-url]

[Hamlet](https://github.com/gregwebs/hamlet.js) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-hamlet --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var hamlet = require('jstransformer')(require('jstransformer-hamlet'));

var template = '<div>\n  <span>Hi, #{foo}!';
var locals = {foo: 'world'};

hamlet.compile(template).fn(locals);
//=> '<div><span>Hi, world!</span></div>'

hamlet.render(template, locals).body;
//=> '<div><span>Hi, world!</span></div>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-hamlet/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-hamlet
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-hamlet.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-hamlet
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-hamlet.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-hamlet
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-hamlet.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-hamlet
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-hamlet.svg

[jstransformers-url]: http://github.com/jstransformers
