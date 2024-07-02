import express from 'express';
import { createProject } from '../controllers/projectController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/projects', authMiddleware('Admin'), createProject);

export default router;
