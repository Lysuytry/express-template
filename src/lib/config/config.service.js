import 'dotenv/Config';

export class ConfigService {

  constructor() {
    this.envConfig = process.env;
  }

  getPort() {
    return +this.envConfig.PORT;
  }
}
