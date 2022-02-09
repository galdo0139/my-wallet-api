import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRepository from '../../../app/repositories/userRepository';
import userService from '../../../app/services/userService';
import { createUser } from '../../factories/userFactory';
import { compareInvalidPasswordMock, compareValidPasswordMock, passwordHashMock } from '../../mocks/libs/bcryptMock';
import { signMock } from '../../mocks/libs/jwtMock';
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

describe('User service - signIn', () => {
    it('should return a token when using valid credentials ', async () => {
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(compareValidPasswordMock);
        jest.spyOn(jwt, 'sign').mockImplementation(signMock);
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userFoundedByUsernameMock);

        const user = createUser();
        const auth = await userService.anthenticateUser(user);

        expect(auth).toEqual(
            expect.objectContaining({ username: user.username }),
        );
    });

    it('should sucessfully athenticate a user when using valid credentials', async () => {
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(compareValidPasswordMock);
        jest.spyOn(jwt, 'sign').mockImplementation(signMock);
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userFoundedByUsernameMock);

        const user = createUser();

        await expect(userService.anthenticateUser(user))
            .resolves
            .not
            .toThrow('The username or password provided are incorrect');
    });

    it('should throw an error when using a invalid username', async () => {
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(compareValidPasswordMock);
        jest.spyOn(jwt, 'sign').mockImplementation(signMock);
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userNotFoundedByUsernameMock);

        const user = createUser();

        await expect(userService.anthenticateUser(user))
            .rejects
            .toThrow('The username or password provided are incorrect');
    });

    it('should throw an error when using a invalid password', async () => {
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(compareInvalidPasswordMock);
        jest.spyOn(jwt, 'sign').mockImplementation(signMock);
        jest.spyOn(userRepository, 'findByUsername').mockImplementation(userFoundedByUsernameMock);

        const user = createUser();

        await expect(userService.anthenticateUser(user))
            .rejects
            .toThrow('The username or password provided are incorrect');
    });
});
