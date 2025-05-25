import { upload } from '../../../Controllers/Patient/Medical Document/Upload.js';
import { tokenAuthentication } from '../../../Middleware/User/Authentication.js';
import { Router } from 'express';
const router = Router();

router.post('', tokenAuthentication, upload);

export default router;