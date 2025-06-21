import { Router } from 'express';
import passport from 'passport';
import { registerResponse, loginUser, failRegister, failLogin } from '../controller/sessions.controller.js'

const router = Router();

// Register
router.post('/register', passport.authenticate('register', { failureRedirect: '/api/sessions/fail-register', session: false }), registerResponse)

// Login
router.post('/login', loginUser)

router.get("/fail-register", failRegister);

router.get("/fail-login", failLogin);

export default router;