import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

//users CRUD
//GET
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.send({ result: "Success", payload: users })
    } catch (error) {
        console.error("No se pudo obtener usuarios con mongoose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con mongoose", message: error });
    }
}) 

//POST
router.post('/', async (req, res) => {
    // console.log("post recibido")
    try {
        const { first_name, last_name, email, age, password, cart, role } = req.body;

        //TODO: validar lo que viene en el req.body

        const user = await userModel.create({ first_name, last_name, email, age, password, cart, role });
        console.log("usuario creado: ", user)
        res.status(201).send({ result: "Success", payload: user._id })
    } catch (error) {
        console.error("No se pudo crear el usuario con mongoose: " + error);
        res.status(500).send({ error: "No se pudo crear el usuario con mongoose", message: error });
    }
})


//PUT
router.put('/:id', async (req, res) => {
    try {
        let userUpdated = req.body;
        let user = await userModel.updateOne({ _id: req.params.id }, userUpdated)
        res.status(202).send(user);
    } catch (error) {
        console.error("No se pudo modificar usuarios con mongoose: " + error);
        res.status(500).send({ error: "No se pudo modificar usuarios con mongoose", message: error });
    }
})


//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let result = await userModel.deleteOne({ _id: req.params.id })
        res.status(202).send({ status: "success", payload: result });
    } catch (error) {
        console.error("No se pudo eliminar el usuario con mongoose: " + error);
        res.status(500).send({ error: "No se pudo eliminar el usuario con mongoose", message: error });
    }
})


export default router;