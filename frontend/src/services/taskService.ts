import axios from 'axios';

interface TaskData {
  task: string;
  assignedTo: number;
  status: string;
}

export const createTask = async (taskData: TaskData) => {
  await axios.post('/tasks', taskData);
};
