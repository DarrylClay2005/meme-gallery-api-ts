import { Router } from 'express';
import { addMeme } from '../controllers/memeController.js';

const router = Router();

router.post('/', addMeme);

export default router;
