import { Router } from 'express';
const router = Router();
import { appointmentsHistory } from '../../Controllers/Doctor/Appointments/AppointmentsHistory.js';
import { tokenAuthentication } from '../../Middleware/User/Authentication.js';

// Route for submitting appointment result and treatment plan
router.get('',tokenAuthentication, appointmentsHistory);

export default router;
