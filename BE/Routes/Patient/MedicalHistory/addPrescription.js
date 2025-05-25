import { Router } from 'express';
import { addPrescription } from '../../../Controllers/Patient/MedicalHistory/addPrescription.js';
// const { tokenAuthentication } = require('../../Middleware/User/Authentication');

const router = Router();

router.post('', addPrescription);

export default router;