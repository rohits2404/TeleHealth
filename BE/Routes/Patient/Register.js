import { Router } from 'express';
import patientRegister from '../../Controllers/Patient/Register.js';

const router = Router();

router.post('', patientRegister);

export default router;