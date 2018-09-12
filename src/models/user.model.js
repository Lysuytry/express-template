import { Sequelize, sequelize } from '../lib/sequelize';

const User = sequelize.define(
  'Users',
  {
    id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING(100), allowNull: false, validate: { isAlphanumeric: true } },
    password: { type: Sequelize.STRING(100), allowNull: false, validate: { isAlphanumeric: true } },
    role: { type: Sequelize.ENUM('guest', 'admin'), defaultValue: 'guest' },
    status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' },
    createdBy: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false },
    updatedBy: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false }
  },
  { timestamps: true }
);
export default User;
