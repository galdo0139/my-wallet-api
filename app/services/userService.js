import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import DuplicatedError from '../Errors/DuplicatedError.js';
import InvalidCredentialsError from '../Errors/InvalidCredentialsError.js';
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

    async anthenticateUser({ username, password }) {
        const user = await userRepository.findByUsername(username);

        if (!user) {
            throw new InvalidCredentialsError({});
        }

        if (bcrypt.compareSync(password, user.password)) {
            const secretKey = process.env.JWT_SECRET;
            const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

            return {
                jwt_token: token,
                username,
                name: user.name,
            };
        }

        throw new InvalidCredentialsError({});
    },

    async usernameAlreadyExist(username) {
        const user = await userRepository.findByUsername(username);
        return !!user;
    },
};

export default userService;
