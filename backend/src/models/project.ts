import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Task from './task';

class Project extends Model {
  public id!: number;
  public name!: string;
  public tasks?: Task[];
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Project',
  }
);

Project.hasMany(Task, { as: 'tasks' });
Task.belongsTo(Project);

export default Project;
