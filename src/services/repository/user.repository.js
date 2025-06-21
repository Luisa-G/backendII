import { getByEmailDao, createUserDao } from "../dao/mongo/user.dao.js";

export default class UserRepository {
    async getByEmail(email) {
        const user = await getByEmailDao(email)
        return user;
    }

    async createUser(userData) {
        return await createUserDao(userData);
    }

}