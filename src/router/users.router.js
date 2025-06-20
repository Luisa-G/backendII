import { Router } from 'express';
import * as UsersController from '../controller/users.controller.js'

const router = Router();

//get
router.get('/', UsersController.getAllUsers);


//post
router.post('/', UsersController.saveUser);



// //delete
// router.delete


export default router;
