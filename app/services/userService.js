import bcrypt from 'bcrypt';
import DuplicatedError from '../Errors/DuplicatedError.js';
import * as userRepository from '../repositories/userRepository.js';

async function registerUser(fields) {
    const { name, username, password } = fields;

    if (await usernameAlreadyExist(username)) {
        throw new DuplicatedError({ message: 'This user already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    userRepository.create(name, username, hashedPassword);
}

async function usernameAlreadyExist(username) {
    const user = await userRepository.findByUsername(username);
    return !!user;
}

export {
    registerUser,
};
