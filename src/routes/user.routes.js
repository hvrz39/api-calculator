import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';

const router = Router();
const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], userController.getAll);
router.get('/:id', [], userController.getById);
router.post('/', [], userController.create);
router.put('/:id', [], userController.update);
router.delete('/:id', [], userController.remove);

export default router;