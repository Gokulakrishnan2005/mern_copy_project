import express from 'express';
import { test } from '../controller/user.controllers.js';

const router = express.Router();

router.get('/test', test);

export default router;