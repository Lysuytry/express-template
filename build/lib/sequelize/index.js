'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('./sequelize.provider');

Object.defineProperty(exports, 'sequelize', {
  enumerable: true,
  get: function () {
    return _sequelize.sequelize;
  }
});
Object.defineProperty(exports, 'Op', {
  enumerable: true,
  get: function () {
    return _sequelize.Op;
  }
});
Object.defineProperty(exports, 'Sequelize', {
  enumerable: true,
  get: function () {
    return _sequelize.Sequelize;
  }
});
//# sourceMappingURL=index.js.map