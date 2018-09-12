'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = (0, _mongoose.Schema)({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdBy: { type: _mongoose.Schema.Types.ObjectId },
  updatedBy: { type: _mongoose.Schema.Types.ObjectId }
}, { timestamps: true });

exports.default = _mongoose2.default.model('User', userSchema);
//# sourceMappingURL=users.collection.js.map