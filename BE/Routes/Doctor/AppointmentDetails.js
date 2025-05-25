import { Router } from 'express';
const router = Router();
import AppointmentDetails from '../../Controllers/Doctor/Appointments/appointmentdetails.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js'

// Route for submitting appointment result and treatment plan
router.get('/:appointmentId',tokenAuthentication, AppointmentDetails);

export default router;
