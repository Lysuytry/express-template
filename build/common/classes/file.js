'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileAsync = undefined;

var _util = require('util');

var _fs = require('fs');

const readFileAsync = exports.readFileAsync = path => (0, _util.promisify)(_fs.readFile)(path, { encoding: `utf-8` });
//# sourceMappingURL=file.js.map