import { Router } from 'express';
import addAvailability from '../../Controllers/Doctor/Availability/add.js';
import deleteAvailability from '../../Controllers/Doctor/Availability/delete.js';
import viewDoctorTimeslots from '../../Controllers/Doctor/Availability/view.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';

const router = Router();
router.delete('/delete', tokenAuthentication, deleteAvailability);
router.post('/add', tokenAuthentication, addAvailability);
router.get('/view', tokenAuthentication, viewDoctorTimeslots);

export default router;