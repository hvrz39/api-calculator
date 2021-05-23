import { Router } from 'express';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import * as userBalanceController from '../controllers/userbalance.controller';


const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.post('/', [], userBalanceController.addUserBalance);

export default router;