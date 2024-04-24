import { Router } from 'express';

import { inputToUserUserPreferences } from '../controllers/selectedOptions';

const router = Router();

router.post('/postPreferences',inputToUserUserPreferences);


export default router;    