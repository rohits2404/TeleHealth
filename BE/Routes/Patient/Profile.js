import { Router } from 'express';
import { patientInfo, patientAppointments, patientDoctors, patientReviews, patientViewRequests } from '../../Controllers/Patient/Profile.js';
import { tokenAuthentication } from '../../Middleware/User/Authentication.js';

const router = Router();

router.get('/info', tokenAuthentication, patientInfo);
router.get('/appointments', tokenAuthentication, patientAppointments);
router.get('/doctors', tokenAuthentication, patientDoctors);
router.get('/reviews', tokenAuthentication, patientReviews);
router.get('/requests', tokenAuthentication, patientViewRequests);

export default router;    