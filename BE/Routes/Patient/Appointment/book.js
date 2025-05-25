import { Router } from 'express';
import { bookAppointment } from '../../../Controllers/Patient/Appointment/book.js';
import { patientGetAvailabilities } from '../../../Controllers/Patient/Appointment/patientGetAvailabilities.js';
import { appointmentsHistory } from '../../../Controllers/Patient/Appointment/appointmentsHistory.js';
import { pendingappointments } from '../../../Controllers/Patient/Appointment/pendingappointments.js';
import { AppointmentDetails } from '../../../Controllers/Patient/Appointment/appointmentDetails.js';
import { SubmitReview } from '../../../Controllers/Patient/Appointment/SubmitReview.js';

import { tokenAuthentication } from '../../../middleware/User/Authentication.js';
const router = Router();


router.post('/book', tokenAuthentication, bookAppointment);
router.get('/appointmentsHistory', tokenAuthentication, appointmentsHistory);
router.get('/pendingappointments', tokenAuthentication, pendingappointments);

router.get('/Availabilities/:doctorId',tokenAuthentication, patientGetAvailabilities);
router.get('/appointmentdetails/:appointmentId', tokenAuthentication, AppointmentDetails);
router.post('/:appointment_id/review', SubmitReview);

export default router;