import { Router } from 'express';
import { bookFollowUpAppointment } from '../../Controllers/Doctor/Appointments/BookFollowUp.js';
import { tokenAuthentication } from '../../Middleware/User/Authentication.js';
const router = Router();


router.post('/FollowupAppointment', tokenAuthentication, bookFollowUpAppointment);

export default router;