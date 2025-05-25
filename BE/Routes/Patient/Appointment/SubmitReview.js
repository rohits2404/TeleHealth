import { Router } from 'express';
import { SubmitReview } from '../../../Controllers/Patient/Appointment/SubmitReview.js';
const router = Router();



router.post('/:appointment_id/review', SubmitReview);

export default router;