import { Router } from 'express';
import testRouter from '@route/tests';

const router = Router();

router.use('/tests', testRouter);

// export { router as default }
export default router;
