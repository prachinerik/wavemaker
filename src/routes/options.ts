import { Router } from 'express';
import { getFromUserPreferences } from '../controllers/options';

const router = Router();

router.get('/getPreferences',getFromUserPreferences);

 


export default router;
