import { Router } from 'express';
import * as userController from '../../controllers/user.controller';
import { verifyToken, isAdmin } from '../../middelwares/auth.jwt';

const router = Router();
const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [verifyToken, isAdmin], userController.getAll);
router.get('/:id', [verifyToken, isAdmin], userController.getById);
router.post('/', [verifyToken, isAdmin], userController.create);
router.put('/:id', [verifyToken, isAdmin], userController.update);
router.delete('/:id', [verifyToken, isAdmin], userController.remove);

export default router;