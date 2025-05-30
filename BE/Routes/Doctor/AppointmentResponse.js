import { Router } from 'express';
import doctorAppointmentResponse from '../../Controllers/Doctor/Appointments/AppointmentResponse.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';
const router = Router();


router.post('/:appointmentId/:patientId/:response', tokenAuthentication, doctorAppointmentResponse);

export default router;