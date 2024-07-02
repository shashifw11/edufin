import sequelize from '../config/database';
import Project from './project';
import Task from './task';
import User from './user';

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

export { Project, Task, User };
