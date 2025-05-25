import { Router } from 'express';
import patientController from '../../Controllers/Patient/Profile.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';

const router = Router();

router.get('/info', tokenAuthentication, patientController.patientInfo);
router.get('/appointments', tokenAuthentication, patientController.patientAppointments);
router.get('/doctors', tokenAuthentication, patientController.patientDoctors);
router.get('/reviews', tokenAuthentication, patientController.patientReviews);
router.get('/requests', tokenAuthentication, patientController.patientViewRequests);

export default router;    