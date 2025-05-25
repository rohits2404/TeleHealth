import { Router } from 'express';
const router = Router();
import { getPatientSummary } from '../../Controllers/Doctor/Appointments/Patientsummary.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';

// Route for submitting appointment result and treatment plan
router.get('/:patientId',tokenAuthentication, getPatientSummary);

export default router;