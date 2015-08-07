'use strict';

var hamlet = require('hamlet');
var extend = require('extend-shallow');

exports.name = 'hamlet';
exports.inputFormats = ['hamlet'];
exports.outputFormat = 'html';

exports.compile = function (str, opts) {
  return hamlet.compile(str, opts);
};

exports.render = function (str, opts, locals) {
  var data = extend({}, opts, locals);
  return hamlet.render(str, data);
};
