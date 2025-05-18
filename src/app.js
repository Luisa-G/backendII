import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js'

const app = express();

//Preparar servidor para recibir objetos JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', usersRouter)

const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => {
    console.log(`Server run on port: ${SERVER_PORT}`);
})

// conexión a la DB
//TODO: esto debería ir en una variable de entorno
const DB = 'mongodb+srv://luisagonzalezpico:nngK5Tan-Gp_v8D@cluster0.ve2lz7c.mongodb.net/entrega1?retryWrites=true&w=majority&appName=Cluster0';
const connectMongoDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log('Conectado con exito a la DB de Mongo');
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Mongoose: " + error);
    }
}
connectMongoDB();