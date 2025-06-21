import userModel from './models/user.model.js'

export const getByEmailDao = async (email) => {
    return await userModel.findOne({ email })
}

export const createUserDao = async (userData) => {
    return await userModel.create(userData);
};