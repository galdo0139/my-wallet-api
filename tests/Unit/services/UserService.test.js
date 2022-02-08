import bcrypt from 'bcrypt';
import userRepository from '../../../app/repositories/userRepository';
import userService from '../../../app/services/userService';
import { createUser } from '../../factories/userFactory';
import { passwordHashMock } from '../../mocks/libs/bcryptMock';
import { createUserMock, userFoundedByUsernameMock, userNotFoundedByUsernameMock } from '../../mocks/repositories/userRepositoryMock';
import { unusedUsernameMock, existingUsernameMock } from '../../mocks/services/userServiceMock';

describe('User service - usernameAlreadyExist', () => {
    it('should return true if username already exists', async () => {
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userFoundedByUsernameMock);
        const user = createUser();
        await expect(userService.usernameAlreadyExist(user.username)).resolves.toBe(true);
    });

    it("should return false if username doesn't exist", async () => {
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userNotFoundedByUsernameMock);

        const user = createUser();
        const r = await userService.usernameAlreadyExist(user.username);
        expect(r).toBe(false);
    });
});

describe('User service - registerUser', () => {
    it('should sucessfully register a user', async () => {
        jest.spyOn(userService, 'usernameAlreadyExist').mockImplementation(unusedUsernameMock);
        jest.spyOn(bcrypt, 'hashSync').mockImplementation(passwordHashMock);
        jest.spyOn(userRepository, 'create').mockImplementation(createUserMock);

        const user = createUser();

        await expect(userService.registerUser(user))
            .resolves
            .not
            .toThrow('Invalid data receveid');
    });

    it('should throw an error when username already exists', async () => {
        jest.spyOn(userService, 'usernameAlreadyExist').mockImplementation(existingUsernameMock);
        jest.spyOn(bcrypt, 'hashSync').mockImplementation(passwordHashMock);
        jest.spyOn(userRepository, 'create').mockImplementation(createUserMock);

        const user = createUser();

        await expect(userService.registerUser(user))
            .rejects
            .toThrow('This user already exists');
    });
});
