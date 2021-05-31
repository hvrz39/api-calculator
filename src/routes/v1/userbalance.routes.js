import { Router } from 'express';
// import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import { hasAccessAndAdmin } from '../../middelwares';
import * as userBalanceController from '../../controllers/userbalance.controller';


const router = Router();

// const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], userBalanceController.getAllUserBalance);
router.post('/', [], userBalanceController.addUserBalance);
router.get('/:id', [], userBalanceController.getUserBalance);
router.post('/', [], userBalanceController.create);

export default router;