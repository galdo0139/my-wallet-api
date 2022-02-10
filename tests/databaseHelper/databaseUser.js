import userService from '../../app/services/userService';
import { createUser } from '../factories/userFactory';

const databaseUser = {
    async registerUser() {
        const user = createUser();
        await userService.registerUser(user);

        return user;
    },
};

export default databaseUser;
