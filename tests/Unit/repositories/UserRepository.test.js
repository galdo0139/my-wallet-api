import userRepository from '../../../app/repositories/userRepository';
import { connection } from '../../../databaseConnection';
import { createUser } from '../../factories/userFactory';
import { selectQueryMock, simpleQueryMock } from '../../mocks/libs/databaseMock';

describe('User repository - create', () => {
    it('should sucessfully create a user', async () => {
        const user = createUser();

        jest.spyOn(connection, 'query').mockImplementation(simpleQueryMock);

        const result = await userRepository.create(user.name, user.username, user.password);
        expect(result).toEqual(true);
    });

    it('should throw an error when data is incorrect', async () => {
        const user = createUser();
        user.name = '';

        jest.spyOn(connection, 'query').mockImplementation(simpleQueryMock);

        await expect(userRepository.create(user.name, user.username, user.password))
            .rejects
            .toThrow('Simulating a database query error');
    });
});

describe('User repository - findByUsername', () => {
    it('should find user by its username', async () => {
        jest.spyOn(connection, 'query').mockImplementation(selectQueryMock);

        const user = await userRepository.findByUsername('username');
        expect(user).toEqual(
            expect.objectContaining({ id: 1 }),
        );
    });
});
