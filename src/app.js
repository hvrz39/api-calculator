import express from 'express';
import morgan from "morgan"; 
import cors from 'cors';
import  {
    authRoutes,
    userRoutes,
    userBalanceRoutes,
    serviceRoutes,
    recordRoutes,
    myRecordRoutes,
    operationRoutes
} from './routes';

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/v1/api/auth', authRoutes);
app.use('/v1/api/users', userRoutes);
app.use('/v1/api/userbalances', userBalanceRoutes);
app.use('/v1/api/services', serviceRoutes);
app.use('/v1/api/records', recordRoutes);
app.use('/v1/api/myrecords', myRecordRoutes);
app.use('/v1/api/operations', operationRoutes);

export default app;

