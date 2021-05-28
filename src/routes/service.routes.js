import { Router } from 'express';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import * as serviceController from '../controllers/service.controller';
const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], serviceController.getAll);
router.put('/:id', [], serviceController.update);
 router.get('/:id', [], serviceController.getById);
 router.post('/', [], serviceController.create);

export default router;