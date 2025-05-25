import { Router } from 'express';
import  login  from '../Controllers/Login.js';

const router = Router();

router.post('', login);

export default router;