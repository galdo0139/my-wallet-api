import FieldValuesError from '../Errors/FieldValuesError.js';
import userService from '../services/userService.js';
import { authenticateUserValidation, createUserValidation } from '../Validations/UserValidation.js';

const AuthController = {
    async signUp(req, res) {
        try {
            const { password, password_confirmation: passwordConfirmation } = req.body;
            const validation = createUserValidation.validate(req.body);

            if (validation.error) {
                throw new FieldValuesError({ message: validation.error.details[0].message });
            }

            if (password !== passwordConfirmation) {
                throw new FieldValuesError({ message: "Passwords doesn't match" });
            }

            await userService.registerUser(req.body);
            res.sendStatus(201);
        } catch (error) {
            res.status(error.statusCode || 500).send(error.message);
        }
    },

    async signIn(req, res) {
        try {
            const validation = authenticateUserValidation.validate(req.body);

            if (validation.error) {
                throw new FieldValuesError({ message: validation.error.details[0].message });
            }

            const credentials = await userService.anthenticateUser(req.body);
            res.send(credentials);
        } catch (error) {
            res.status(error.statusCode || 500).send(error.message);
        }
    },
};

export default AuthController;
