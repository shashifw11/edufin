import axios from 'axios';

interface ProjectData {
  name: string;
}

export const createProject = async (projectData: ProjectData) => {
  await axios.post('/projects', projectData);
};
