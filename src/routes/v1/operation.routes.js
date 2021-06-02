import { Router } from 'express';
import { doOperation } from '../../controllers/operations.controller';
import { verifyToken, isUser } from '../../middelwares/auth.jwt';
const router = Router();

router.post('/', [verifyToken, isUser], doOperation);

export default router;