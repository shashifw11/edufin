import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createProject } from '../services/projectService';
import ProjectList from '../components/ProjectList';

interface Project {
  id: number;
  name: string;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const handleCreateProject = async () => {
    try {
      await createProject({ name: projectName });
      setProjectName('');
      fetchProjects();
      alert('Project created!');
    } catch (error) {
      alert('Failed to create project.');
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
      />
      <button onClick={handleCreateProject}>Create</button>

      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectsPage;
