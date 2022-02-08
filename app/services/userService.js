import bcrypt from 'bcrypt';
import DuplicatedError from '../Errors/DuplicatedError.js';
import userRepository from '../repositories/userRepository.js';

const userService = {
    async registerUser(user) {
        const { name, username, password } = user;

        if (await this.usernameAlreadyExist(username)) {
            throw new DuplicatedError({ message: 'This user already exists' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        userRepository.create(name, username, hashedPassword);
    },

    async usernameAlreadyExist(username) {
        const user = await userRepository.findByUsername(username);
        return !!user;
    },
};

export default userService;
