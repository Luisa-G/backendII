import UserRepository from './repository/user.repository.js';
import UserDTO from './dto/user.dto.js';


const userRepo = new UserRepository();

const getByEmail = async (email) => {
    const user = await userRepo.getByEmail(email);
    if (!user) return null
    return new UserDTO(user)
};

const getRawByEmail = async (email) => {
    return await userRepo.getByEmail(email); // Para validar password con hash
};

const createUser = async (userData) => {
    return await userRepo.createUser(userData);
};

export default { getByEmail, getRawByEmail, createUser };
