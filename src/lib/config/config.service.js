import 'dotenv/Config';

export class ConfigService {
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

  getMongooseConfig() {
    return this.envConfig.MONGODB_URL;
  }
}
