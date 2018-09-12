'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectId = exports.Email = exports.Number = exports.String = exports.Schema = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _joiObjectid = require('joi-objectid');

var _joiObjectid2 = _interopRequireDefault(_joiObjectid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_joi2.default.objectId = (0, _joiObjectid2.default)(_joi2.default);

const Schema = data => {
  return _joi2.default.object().keys(data);
};

const String = ({ max, min, alpNum, required }) => {
  let temp = _joi2.default.string();
  if (alpNum) temp.alphanum();
  if (max) temp.max(max);
  if (min) temp.min(min);
  if (required) temp.required();
  return temp;
};

const Number = ({ max, min, int, required }) => {
  let temp = _joi2.default.number();
  if (int) temp.integer();
  if (max) temp.max(max);
  if (min) temp.min(min);
  if (required) temp.required();
  return temp;
};

const Email = ({ required }) => {
  let temp = _joi2.default.string().email();
  if (required) temp.required();
  return temp;
};

const ObjectId = ({ required }) => {
  let temp = _joi2.default.objectId();
  if (required) temp.required();
  return temp;
};

exports.Schema = Schema;
exports.String = String;
exports.Number = Number;
exports.Email = Email;
exports.ObjectId = ObjectId;
//# sourceMappingURL=joi.dto.js.map