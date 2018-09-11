'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Op = exports.sequelize = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelizeProvider = async () => {
  try {
    const { DBNAME, DBUSER, DBPASS, DBHOST, DB } = _config2.default.getSequelizeConfig();
    const sequelize = await new _sequelize2.default(DBNAME, DBUSER, DBPASS, { host: DBHOST, dialect: DB });
    sequelize.sync();
    return sequelize;
  } catch (error) {
    console.error(error);
  }
};

const Op = _sequelize2.default.Op;
const sequelize = sequelizeProvider();

exports.sequelize = sequelize;
exports.Op = Op;
//# sourceMappingURL=sequelize.provider.js.map