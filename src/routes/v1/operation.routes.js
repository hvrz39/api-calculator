import { Router } from 'express';
import { hasAccessAndUser} from '../../middelwares/';
import { doOperation } from '../../controllers/operations.controller';
const router = Router();

router.post('/', [hasAccessAndUser], doOperation);

export default router;