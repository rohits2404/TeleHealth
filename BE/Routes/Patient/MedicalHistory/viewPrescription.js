

import { Router } from 'express';
import { getPrescription } from '../../../Controllers/Patient/MedicalHistory/viewPrescription.js';
// const { tokenAuthentication } = require('../../Middleware/User/Authentication');

const router = Router();

router.get('/:patientId', getPrescription);

export default router;