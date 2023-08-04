import { Router } from 'express';

import {index} from "@app/controllers/test.controller";

const router = Router();

router.get('/', index);

export default router;
