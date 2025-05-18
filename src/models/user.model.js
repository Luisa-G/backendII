import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: {
            type: String,
            unique: true,
            required: [true, "Correo es requerido"]
        },
        age: Number,
        password: String,
        cart: String,
        role: {
            type: String,
            default: "user"
        }
    },
    {
        timestamps: true
    }
);

export const userModel = mongoose.model(userCollection, userSchema);