import { Router } from 'express';
import { getBusinessData, regenerateHeadline } from '../controllers/businessController';

const router = Router();

router.post('/business-data', getBusinessData);
router.get('/regenerate-headline', regenerateHeadline);

export default router;
