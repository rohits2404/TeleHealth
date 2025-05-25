import { Router } from 'express';
import logout from '../Controllers/Logout.js';

const router = Router();

router.post('', logout);

export default router;