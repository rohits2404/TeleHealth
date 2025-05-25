import { Router } from 'express';
import doctorRegister from '../../Controllers/Doctor/Register.js';

const router = Router();

router.post('', doctorRegister);

export default router;