import { Router } from 'express';
import { insertIntoUsers } from '../controllers/users';
const router = Router();
router.post("/insertIntoUsers",insertIntoUsers);
    console.log('Post reached Users');
export default router;    


