'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigService = undefined;

require('dotenv/Config');

class ConfigService {
  constructor() {
    this.envConfig = process.env;
  }

  getPort() {
    return +this.envConfig.PORT;
  }

  getSequelizeConfig() {
    return {
      DBNAME: this.envConfig.DBNAME,
      DBUSER: this.envConfig.DBUSER,
      DBPASS: this.envConfig.DBPASS,
      DBHOST: this.envConfig.DBHOST,
      DB: this.envConfig.DB
    };
  }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map