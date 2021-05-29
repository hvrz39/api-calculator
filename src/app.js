import express from 'express';
import morgan from "morgan"; 
import cors from 'cors';
import  {
    authRoutes,
    userRoutes,
    userBalanceRoutes,
    serviceRoutes,
    recordRoutes
} from './routes';

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/userbalances', userBalanceRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/records', recordRoutes);

export default app;

