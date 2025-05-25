import { Router } from 'express';
import { editInfo, editPassword } from '../../Controllers/Doctor/Edit.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';
const router = Router();

router.put('/info', tokenAuthentication, editInfo);
router.put('/password', tokenAuthentication, editPassword);

export default router;