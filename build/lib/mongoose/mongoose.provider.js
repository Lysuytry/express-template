'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongooseConfig = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongooseConfig = () => {
  const MONGO_URL = _config2.default.getMongooseConfig();
  _mongoose2.default.connect(MONGO_URL, error => {
    if (error) console.error(error);
  });
};

exports.mongooseConfig = mongooseConfig;
//# sourceMappingURL=mongoose.provider.js.map