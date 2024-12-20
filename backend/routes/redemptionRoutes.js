import express from 'express';
import { createRedemptionRequest } from '../controllers/redemptionController.js';

const router = express.Router();

router.post('/', createRedemptionRequest);

export default router;