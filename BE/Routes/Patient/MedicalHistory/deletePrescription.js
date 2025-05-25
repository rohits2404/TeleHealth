

import { Router } from 'express';
import { deletePrescription } from '../../../Controllers/Patient/MedicalHistory/deletePrescription.js';
// const { tokenAuthentication } = require('../../Middleware/User/Authentication');

const router = Router();
router.delete('', deletePrescription);

export default router;