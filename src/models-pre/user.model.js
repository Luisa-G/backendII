import mongoose from 'mongoose';

const collection = 'usuarios';

const schema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "Nombre es requerido"],
        },
        last_name: {
            type: String,
            required: [true, "Apellido es requerido"],
        },
        email: {
            type: String,
            required: [true, "Correo es requerido"],
            unique: true,
        },
        age: {
            type: Number,
            required: [true, "Edad es requerida"],
        },
        password: {
            type: String,
            required: [true, "Contraseña es requerido"],
        },
        cart: {
            type: String,
            required: true,
            default: 'cartID1'
        },
        role: {
            type: String,
            required: true,
            default: 'user',
            enum: ['user', 'admin']
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model(collection, schema);

export default userModel;