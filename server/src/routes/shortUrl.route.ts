// import {Express, Request, Response} from 'express'
import { Router } from 'express';

const router = Router();

import shortIDController from '../controllers/shortUrl.controller';

router.get('/api/url', shortIDController.getIndexPage);
router.post('/api/url', shortIDController.makeShortUrl);

export default router;
