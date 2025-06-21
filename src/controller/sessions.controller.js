import userService from '../services/user.service.js';
import { isValidPassword, generateJWToken } from '../utils.js';
import UserDTO from '../services/dto/user.dto.js'

export const registerResponse = (req, res) => {
    res.send({ status: "success", message: "Usuario creado con exito" });
}


export const loginUser = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        
        const user = await userService.getRawByEmail(email);
        console.log("Usuario encontrado para login:");
        console.log(user);
        if (!user) {
            console.warn("User doesn't exists with username: " + email);
            return res.status(204).send({ error: "Not found", message: "Usuario no encontrado con username: " + email });
        }

        const isValid = isValidPassword(user, password);
        if (!isValid) {
            console.warn("Invalid credentials for user: " + email);
            return res.status(401).send({ status: "error", error: "El usuario y la contraseña no coinciden!" });
        }

        const userDTO = new UserDTO(user);
        const token = generateJWToken(userDTO);
        console.log(token);

        //Creamos la cookie y almacenamos el token en la cookie
        res.cookie('jwtCookieToken', token, {
            maxAge: 600000,
            httpOnly: true //No se expone la cookie
        })
        
        res.send({ status: "login success" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await userService.createUser({
        first_name,
        last_name,
        email,
        age,
        password: hashedPassword,
        role: 'user'
        });
        res.send({ status: 'Usuario registrado con éxito' });
    } catch (err) {
        res.status(500).send({ error: 'Error al registrar' });
    }
};

export const failRegister = (req, res) => {
    res.status(401).send({ error: "Failed to process register!" });
}

export const failLogin = (req, res) => {
    res.status(401).send({ error: "Failed to process login!" });
}