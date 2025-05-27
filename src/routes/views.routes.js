import { Router } from 'express';
import cookieParser from 'cookie-parser';

const router = Router();

router.use(cookieParser("CoderS3cr3tC0d3"));

router.get('/', (req, res) => {
    res.render('login', {})
});

export default router;