import { Router } from 'express';
import addPatientPrescription from '../../../Controllers/Doctor/Patient Prescription/Add.js';
import { tokenAuthentication } from '../../../middleware/User/Authentication.js';

const router = Router();

router.post('/:appointmentId', tokenAuthentication, addPatientPrescription);

export default router;