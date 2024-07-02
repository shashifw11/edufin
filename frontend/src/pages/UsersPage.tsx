import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUser } from '../services/userService';
import UserList from '../components/UserList';

interface User {
  id: number;
  name: string;
  userType: 'Admin' | 'Manager' | 'Developer';
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState<'Admin' | 'Manager' | 'Developer'>('Developer');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser({ name: userName, userType });
      setUserName('');
      setUserType('Developer');
      fetchUsers();
      alert('User created!');
    } catch (error) {
      alert('Failed to create user.');
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value as 'Admin' | 'Manager' | 'Developer')}
      >
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Developer">Developer</option>
      </select>
      <button onClick={handleCreateUser}>Create</button>

      <UserList users={users} />
    </div>
  );
};

export default UserPage;
