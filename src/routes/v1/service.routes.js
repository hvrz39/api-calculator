import { Router } from 'express';
import { verifyToken, isAdmin } from '../../middelwares/auth.jwt';
import * as serviceController from '../../controllers/service.controller';
const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [verifyToken, isAdmin], serviceController.getAll);
router.put('/:id', [verifyToken, isAdmin], serviceController.update);
router.get('/:id', [verifyToken, isAdmin], serviceController.getById);
router.post('/', [verifyToken, isAdmin], serviceController.create);
router.delete('/:id', [verifyToken, isAdmin], serviceController.remove);

export default router;