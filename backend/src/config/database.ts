import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');
const dotenvConfig = dotenv.config({ path: envPath });

if (dotenvConfig.error) {
  throw dotenvConfig.error;
}

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT || '3306'),
    logging: false, 
  }
);

export default sequelize;
