import { Router } from 'express';
import { sendEmail, verifyResetPasswordEmail, resetPassword } from '../Controllers/Email.js';
import { tokenAuthentication } from '../middleware/User/Authentication.js'


const router = Router();

router.post('/send-email', sendEmail);
router.post('/verify-reset-password-email', verifyResetPasswordEmail);
router.put('/reset-password', tokenAuthentication, resetPassword);

export default router;