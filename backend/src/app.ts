import express from 'express';
import cors from 'cors';
import businessRoutes from './routes/businessRoutes';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  credentials: true,
}));

app.use(express.json());

app.use('/api', businessRoutes);

export default app;
