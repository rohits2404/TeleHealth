import { Router } from 'express';
import patientController from '../../Controllers/Patient/Edit.js';
import { tokenAuthentication } from "../../middleware/User/Authentication.js"

const router = Router();

router.put('/info', tokenAuthentication, patientController.editInfo);
router.put('/password', tokenAuthentication, patientController.editPassword);

export default router;