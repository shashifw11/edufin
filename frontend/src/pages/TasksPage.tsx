import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createTask } from '../services/taskService';
import TaskList from '../components/TaskList';

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

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchTasks();
    fetchUsers();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleCreateTask = async () => {
    if (assignedTo === null) {
      alert('Please select a user to assign the task to.');
      return;
    }

    try {
      await createTask({ task: taskDescription, assignedTo, status });
      setTaskDescription('');
      setAssignedTo(null);
      setStatus('');
      fetchTasks();
      alert('Task created!');
    } catch (error) {
      alert('Failed to create task.');
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <select
        value={assignedTo ?? ''}
        onChange={(e) => setAssignedTo(Number(e.target.value))}
      >
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <button onClick={handleCreateTask}>Create</button>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
