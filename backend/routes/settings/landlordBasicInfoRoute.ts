import express from 'express';
import { landlordBasicInfoController } from '../../controllers/settings/landlordBasicInfoController';

const router = express.Router()

router.get('/landlordsetting/:id', landlordBasicInfoController)

export default router