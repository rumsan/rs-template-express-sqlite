import express from 'express';
import settings from './modules/setting/setting.controller';

const router = express.Router();
router.use('/settings', settings);

export default router;
