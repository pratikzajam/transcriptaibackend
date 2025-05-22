import express from 'express';
import { saveUserData } from '../Controller/user.controller.js';

const router = express.Router();

router.post('/save-user', saveUserData);

export default router;
