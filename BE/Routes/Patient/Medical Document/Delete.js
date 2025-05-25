import { deleteFile } from '../../../Controllers/Patient/Medical Document/Delete.js';
import { tokenAuthentication } from '../../../Middleware/User/Authentication.js';
import { Router } from 'express';
const router = Router();

router.delete('', tokenAuthentication, deleteFile);

export default router;