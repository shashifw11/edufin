import express from 'express';
import { createTask, updateTaskStatus } from '../controllers/taskController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/tasks', authMiddleware('Manager'), createTask);
router.put('/tasks/status', authMiddleware(['Manager', 'Developer']), updateTaskStatus);

export default router;
