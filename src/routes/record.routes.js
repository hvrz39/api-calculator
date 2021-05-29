import { Router } from 'express';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import * as recordController from '../controllers/record.controller';
const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], recordController.getAll);
router.put('/:id', [], recordController.update);
router.get('/:id', [], recordController.getById);
router.delete('/:id', [], recordController.remove);

export default router;