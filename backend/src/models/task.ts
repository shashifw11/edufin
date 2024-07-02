import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './user';

class Task extends Model {
  public id!: number;
  public task!: string;
  public status!: string;
  public assignedTo?: User;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'not started',
    },
  },
  {
    sequelize,
    modelName: 'Task',
  }
);

Task.belongsTo(User, { as: 'assignedTo' });

export default Task;
