import Sequelize from 'sequelize';
import config from '../config';

const sequelizeProvider = () => {
  try {
    const { DBNAME, DBUSER, DBPASS, DBHOST, DB } = config.getSequelizeConfig();
    const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, { host: DBHOST, dialect: DB });
    sequelize.sync();
    return sequelize;
  } catch (error) {
    console.error(error);
  }
};

const Op = Sequelize.Op;
const sequelize = sequelizeProvider();

export { Sequelize, sequelize, Op };
