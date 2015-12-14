'use strict';

var hamlet = require('hamlet');

exports.name = 'hamlet';
exports.outputFormat = 'html';

exports.compile = function (str, opts) {
  return hamlet.compile(str, opts);
};
