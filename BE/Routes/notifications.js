import { Router } from 'express';
import notificationsController from '../Controllers/notifications.js';
import { tokenAuthentication } from '../middleware/User/Authentication.js'

const router = Router();

router.get('/Unread', tokenAuthentication, notificationsController.getUnreadNotifications);
router.get('/All', tokenAuthentication, notificationsController.getNotifications);
router.put('/Markread', tokenAuthentication, notificationsController.markNotificationsAsRead);
router.post('/setExpoPushToken', tokenAuthentication, notificationsController.setExpoPushToken);

export default router;