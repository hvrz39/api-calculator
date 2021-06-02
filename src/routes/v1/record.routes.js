import { Router } from 'express';
import { verifyToken, isAdmin } from '../../middelwares/auth.jwt';
import * as recordController from '../../controllers/record.controller';
const router = Router();

const hasAccessAndAdmin = [verifyToken, isAdmin ];

router.get('/', [verifyToken, isAdmin ], recordController.getAll);
router.put('/:id', [verifyToken, isAdmin], recordController.update);
router.get('/:id', [verifyToken, isAdmin], recordController.getById);
router.delete('/:id', [verifyToken, isAdmin], recordController.remove);

export default router;