'use strict';

var hamlet = require('hamlet');
var extend = require('extend-shallow');

exports.name = 'hamlet';
exports.outputFormat = 'html';

exports.compile = function (str, opts) {
  return hamlet.compile(str, opts);
};
