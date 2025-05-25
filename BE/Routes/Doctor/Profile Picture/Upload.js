import upload from '../../../Controllers/Doctor/Profile Picture/Upload.js';
import { tokenAuthentication } from '../../../middleware/User/Authentication.js';
import { Router } from 'express';
const router = Router();

router.put('', tokenAuthentication, upload);

export default router;