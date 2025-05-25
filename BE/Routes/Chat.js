import { Router } from 'express';
import chatController from '../Controllers/Chat.js';
import { tokenAuthentication } from '../middleware/User/Authentication.js';

const router = Router();

router.get('/:appointmentId', tokenAuthentication, chatController.getAppointmentChat);
router.post('', tokenAuthentication, chatController.sendAppointmentMessage);

export default router;