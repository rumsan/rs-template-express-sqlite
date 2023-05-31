import express, { NextFunction, Request, Response } from 'express';
import { SettingService } from './setting.service';
import { validate } from './setting.validator';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const name: string = <string>req.query.name;
  SettingService.get(name)
    .then((d) => res.json(d))
    .catch(next);
});

router.post('/', validate('set'), async (req: Request, res: Response, next: NextFunction) => {
  const { name, value } = req.body;
  SettingService.set(name, value)
    .then((d) => res.json(d))
    .catch(next);
});

export default router;
