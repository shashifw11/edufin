import express from 'express';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api', projectRoutes);
app.use('/api', taskRoutes);
app.use('/api', userRoutes);

export default app;
