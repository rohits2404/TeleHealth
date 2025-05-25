import { upload } from '../../../Controllers/Doctor/Profile Picture/Upload.js';
import { tokenAuthentication } from '../../../Middleware/User/Authentication.js';
import { Router } from 'express';
const router = Router();

router.put('', tokenAuthentication, upload);

export default router;