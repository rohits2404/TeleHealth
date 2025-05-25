import { Router } from 'express';
import { getUnreadNotifications, getNotifications, markNotificationsAsRead, setExpoPushToken } from '../Controllers/notifications.js';
import { tokenAuthentication } from '../Middleware/User/Authentication.js';

const router = Router();

router.get('/Unread', tokenAuthentication, getUnreadNotifications);
router.get('/All', tokenAuthentication, getNotifications);
router.put('/Markread', tokenAuthentication, markNotificationsAsRead);
router.post('/setExpoPushToken', tokenAuthentication, setExpoPushToken);

export default router;