import React from 'react';

interface User {
  id: number;
  name: string;
  userType: 'Admin' | 'Manager' | 'Developer';
}

interface Task {
  id: number;
  task: string;
  assignedTo: User;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task} - {task.assignedTo.name} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
