import axios from 'axios';

interface UserData {
  name: string;
  userType: 'Admin' | 'Manager' | 'Developer';
}

export const createUser = async (userData: UserData) => {
  await axios.post('/users', userData);
};
