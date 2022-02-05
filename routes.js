import {Router} from "express";
import {signup} from './app/controllers/userController.js'

const router = Router();

router.get('/', (_,res) => res.send('foi'));
router.post('/sign-up', signup);

export default router;