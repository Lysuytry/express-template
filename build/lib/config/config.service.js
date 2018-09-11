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
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map