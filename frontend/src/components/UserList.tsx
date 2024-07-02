import React from 'react';

interface User {
  id: number;
  name: string;
  userType: 'Admin' | 'Manager' | 'Developer';
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.userType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
