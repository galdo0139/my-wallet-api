import FieldValuesError from '../Errors/FieldValuesError.js';
import * as userService from '../services/userService.js';
import { createUser } from '../Validations/UserValidation.js';

async function signup(req, res) {
    try {
        const { password, password_confirmation: passwordConfirmation } = req.body;
        const validation = createUser.validate(req.body);

        if (validation.error) {
            throw new FieldValuesError({ message: validation.error.details[0].message });
        }

        if (password !== passwordConfirmation) {
            throw new FieldValuesError({ message: "Passwords doesn't match" });
        }

        await userService.registerUser(req.body);
        res.sendStatus(200);
    } catch (error) {
        res.status(error.statusCode || 500).send(error.message);
    }
}

export {
    signup,
};
