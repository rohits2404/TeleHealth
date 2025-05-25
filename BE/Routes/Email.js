import { Router } from 'express';
import emailController from '../Controllers/Email.js';
import { tokenAuthentication } from '../middleware/User/Authentication.js'


const router = Router();

router.post('/send-email', emailController.sendEmail);
router.post('/verify-reset-password-email', emailController.verifyResetPasswordEmail);
router.put('/reset-password', tokenAuthentication, emailController.resetPassword);

export default router;