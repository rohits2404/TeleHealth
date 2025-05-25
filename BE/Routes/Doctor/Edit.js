import { Router } from 'express';
import editController from '../../Controllers/Doctor/Edit.js';
import { tokenAuthentication } from '../../middleware/User/Authentication.js';
const router = Router();

router.put('/info', tokenAuthentication, editController.editInfo);
router.put('/password', tokenAuthentication, editController.editPassword);

export default router;