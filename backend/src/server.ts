import sequelize from './config/database'; 
import express from 'express';

const PORT = process.env.PORT || 3000; 
const app = express();

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
