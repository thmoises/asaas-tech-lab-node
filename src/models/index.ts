/* eslint-disable */

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../database/config.json')[env];

interface DB {
  [key: string]: any;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}

const db: DB = {
  sequelize: new Sequelize(config.database, config.username, config.password, config),
  Sequelize,
};

const envVariable = process?.env?.[config?.use_env_variable];
if (envVariable) {
  db.sequelize = new Sequelize(<string>envVariable, config);
} else {
  db.sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts' && file.indexOf('.test.ts') === -1;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default;
    if (typeof model === 'function') {
      db[model.name] = model(db.sequelize, DataTypes);
    } else {
      throw new Error(`O arquivo ${file} não exporta uma função`);
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
