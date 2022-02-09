import { Router } from 'express';
import AuthController from '../app/controllers/AuthController.js';

const router = Router();

router.get('/', (_, res) => res.send('foi'));

router.post('/sign-up', AuthController.signUp);
router.post('/sign-in', AuthController.signIn);

export default router;
