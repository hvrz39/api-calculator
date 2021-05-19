import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';

const router = Router();
const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], userController.getAll);

export default router;