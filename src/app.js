import express from 'express';
import usersRouter from './router/users.router.js'
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';

//Passport
import passport from 'passport';
import initializePassport from './config/passport.config.js';

import usersViewRouter from './router/users.views.router.js'
import sessionsRouter from './router/sessions.router.js'
import viewsRouter from './router/views.routes.js'
import __dirname from './utils.js';

const app = express();
const SERVER_PORT = 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuraciones handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.use(cookieParser("CoderS3cr3tC0d3"));

//Middleware passport
initializePassport();
app.use(passport.initialize());

//Definir rutas
app.get('/ping', (req, res) => {
    res.send("pong")
})

//Routers
// app.use('/', viewsRouter)
app.use('/users', usersRouter)
// app.use('/api/sessions', sessionsRouter)

// Server listen
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});

// Conectamos la base de datos
const MONGO_URL = 'mongodb+srv://luisagonzalezpico:nngK5Tan-Gp_v8D@cluster0.ve2lz7c.mongodb.net/entrega1?retryWrites=true&w=majority&appName=Cluster0';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB");
        process.exit();
    }
}
connectMongoDB();