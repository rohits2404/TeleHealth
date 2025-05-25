import view from '../../../Controllers/Patient/Medical Document/View.js';
import { tokenAuthentication } from '../../../middleware/User/Authentication.js';
import { Router } from 'express';
const router = Router();

router.get('', tokenAuthentication, view);

export default router;