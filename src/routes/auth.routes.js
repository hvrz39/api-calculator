import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);
router.delete('/logout/:userId', authController.logout);

export default router;