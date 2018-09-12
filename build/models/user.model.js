'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('../lib/sequelize');

const User = _sequelize.sequelize.define('Users', {
  id: { type: _sequelize.Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  username: { type: _sequelize.Sequelize.STRING(100), allowNull: false, validate: { isAlphanumeric: true } },
  password: { type: _sequelize.Sequelize.STRING(100), allowNull: false, validate: { isAlphanumeric: true } },
  role: { type: _sequelize.Sequelize.ENUM('guest', 'admin'), defaultValue: 'guest' },
  status: { type: _sequelize.Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' },
  createdBy: { type: _sequelize.Sequelize.INTEGER.UNSIGNED, allowNull: false },
  updatedBy: { type: _sequelize.Sequelize.INTEGER.UNSIGNED, allowNull: false }
}, { timestamps: true });
exports.default = User;
//# sourceMappingURL=user.model.js.map