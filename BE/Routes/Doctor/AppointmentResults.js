import { Router } from 'express';
const router = Router();
import { AppointmentResultSubmission as _AppointmentResultSubmission } from '../../Controllers/Doctor/Appointments/AppointmentResults.js';
//const { tokenAuthentication } = require('../../Middleware/User/Authentication');

// Route for submitting appointment result and treatment plan
router.post('/:appointmentId/submitresults', _AppointmentResultSubmission);

export default router;
