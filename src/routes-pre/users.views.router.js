import { Router } from 'express';
import { passportCall, authorization } from '../utils.js';

const router = new Router();

//Aquí se renderizan las vistas de handlebars
router.get('/login', (req, res) => {
    res.render("login")
})

router.get('/register', (req, res) => {
    res.render("register")
})

router.get('/current',
    passportCall('current'),
    authorization('user'),

    (req, res) => {
    res.render("current", {
        user: req.user
    })
})

export default router