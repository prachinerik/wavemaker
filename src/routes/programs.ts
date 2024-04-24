import { Router } from 'express';
import { getApplicablePrograms } from '../controllers/programs';

const router = Router();

router.get('/getPrograms/:userId',getApplicablePrograms);

export default router;