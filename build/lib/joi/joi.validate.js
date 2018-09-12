'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validate = (data, schema) => {
  const { error, value } = _joi2.default.validate(data, schema);
  return { error, value };
};

exports.validate = validate;
//# sourceMappingURL=joi.validate.js.map