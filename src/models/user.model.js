import mongoose from 'mongoose';

const collection = 'usuarios';

const schema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true, "Correo es requerido"],
            unique: true,
        },
        age: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        }
        // cart: {
        //     type: String,
        //     required: true
        // },
        // role: {
        //     type: String,
        //     required: true,
        //     default: 'user'
        // }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model(collection, schema);

export default userModel;