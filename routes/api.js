import { Router } from 'express';
import userController from '../app/controllers/userController.js';

const router = Router();

router.get('/', (_, res) => res.send('foi'));
router.post('/sign-up', userController.signup);

export default router;
