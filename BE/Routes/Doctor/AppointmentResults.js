import { Router } from 'express';
const router = Router();
import AppointmentResultSubmission from '../../Controllers/Doctor/Appointments/AppointmentResults.js';
//const { tokenAuthentication } = require('../../Middleware/User/Authentication');

// Route for submitting appointment result and treatment plan
router.post('/:appointmentId/submitresults', AppointmentResultSubmission);

export default router;
