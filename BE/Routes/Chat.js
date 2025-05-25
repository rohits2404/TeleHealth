import { Router } from 'express';
import { getAppointmentChat, sendAppointmentMessage } from '../Controllers/Chat.js';
import { tokenAuthentication } from '../middleware/User/Authentication.js';

const router = Router();

router.get('/:appointmentId', tokenAuthentication, getAppointmentChat);
router.post('', tokenAuthentication, sendAppointmentMessage);

export default router;