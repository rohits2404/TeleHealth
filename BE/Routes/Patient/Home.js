import { Router } from 'express';
import home from '../../Controllers/Patient/Home.js';
const router = Router();

router.get('', home);

export default router;