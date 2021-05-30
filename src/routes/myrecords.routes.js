import { Router } from 'express';
import { hasAccessAndUser } from '../middelwares';
import { verifyToken, isUser } from '../middelwares/auth.jwt';
import * as myRecordCsontroller from '../controllers/myrecord.controller';
const router = Router();

router.get('/', [verifyToken, isUser], myRecordCsontroller.getAll);
// router.put('/:id', [], recordController.update);
// router.get('/:id', [], recordController.getById);
// router.delete('/:id', [], recordController.remove);

export default router;