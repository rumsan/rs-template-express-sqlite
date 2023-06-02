import express, { Request, Response } from 'express';
import settings from './modules/setting/setting.controller';

const router = express.Router();
router.get('/', async (req: Request, res: Response) => {
  res.json({ msg: "Hello there! I'm a Rumsan server." });
});

router.use('/settings', settings);

export default router;
