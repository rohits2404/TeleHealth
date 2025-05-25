import { Router } from 'express';
import { patientRegister } from '../../Controllers/Patient/Register';

const router = Router();

router.post('', patientRegister);

export default router;