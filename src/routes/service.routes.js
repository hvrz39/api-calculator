import { Router } from 'express';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import * as serviceController from '../controllers/service.controller';


const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], serviceController.getAll);
// router.post('/', [], userBalanceController.addUserBalance);
// router.get('/:id', [], userBalanceController.getUserBalance);
// router.post('/', [], userBalanceController.create);

export default router;