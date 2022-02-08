import bcrypt from 'bcrypt';
import userRepository from '../../../app/repositories/userRepository';
import userService from '../../../app/services/userService';
import { createUser } from '../../factories/userFactory';
import { passwordHashMock } from '../../mocks/libs/bcryptMock';
import { createUserMock } from '../../mocks/repositories/userRepositoryMock';
import { unusedUsernameMock } from '../../mocks/services/userServiceMock';

describe('User service - registerUser', () => {
    it('should sucessfully register a user', async () => {
        const user = createUser();

        jest.spyOn(userService, 'usernameAlreadyExist').mockImplementation(unusedUsernameMock);

        // jest.mock('../../../app/services/userService', () => ({
        //     usernameAlreadyExist: jest.fun().mockImplementation((() => false)),
        // }));

        jest.spyOn(bcrypt, 'hashSync').mockImplementation(passwordHashMock);

        jest.spyOn(userRepository, 'create').mockImplementation(createUserMock);

        // usernameAlreadyExist(username)
        // bcrypt.hashSync(password, 10);
        // userRepository.create(name, username, hashedPassword);

        await expect(userService.registerUser(user))
            .resolves
            .not
            .toThrow('Invalid data receveid');
    });

    // it('should throw an error when username already exists', async () => {
    //     const user = createUser();
    //     user.name = '';

    //     jest.spyOn(connection, 'query').mockImplementation(createUserMock);

    //     await expect(create(user.name, user.username, user.password))
    //         .rejects
    //         .toThrow('Simulating a database query error');
    // });
});

// describe('User service - usernameAlreadyExist', () => {
//     it('should return true if username already exists', async () => {

//     });
// });
