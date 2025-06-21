import { Router } from 'express';
import { passportCall, authorization } from '../utils.js';
import { renderLogin, renderRegister, renderCurrent } from '../controller/users.view.controller.js'


const router = new Router();

router.get('/login', renderLogin);

router.get('/register', renderRegister)

router.get('/current',
    passportCall('current'),
    authorization('user'),
    renderCurrent
)


export default router