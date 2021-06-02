import { Router } from 'express';
import { verifyToken, isAdmin } from '../../middelwares/auth.jwt';
import * as userBalanceController from '../../controllers/userbalance.controller';


const router = Router();

// const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [verifyToken, isAdmin], userBalanceController.getAllUserBalance);
router.post('/', [verifyToken, isAdmin], userBalanceController.addUserBalance);
router.get('/:id', [verifyToken, isAdmin], userBalanceController.getUserBalance);
router.post('/', [verifyToken, isAdmin], userBalanceController.create);

export default router;