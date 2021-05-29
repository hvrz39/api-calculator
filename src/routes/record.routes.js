import { Router } from 'express';
import { verifyToken, isAdmin } from '../middelwares/auth.jwt';
import * as recordController from '../controllers/record.controller';
const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [], recordController.getAll);
// router.put('/:id', [], serviceController.update);
 router.get('/:id', [], recordController.getById);
// router.post('/', [], serviceController.create);
// router.delete('/:id', [], serviceController.remove);

export default router;