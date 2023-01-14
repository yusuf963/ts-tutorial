/*
Challenge
Both createUser and getUser are currently typed as unknown.

Your challenge is to type the functions so that the errors go away.

Reference the function typing and Promise syntax that we've looked at previously for help.
*/
import { expect } from 'chai';
import { it } from 'mocha';

interface User {
    id: string;
    firstName: string;
    lastName: string;
}

const createThenGetUser = async (
    createUser: () => Promise<string>,
    getUser: (id: string) => Promise<User>
): Promise<User> => {
    const userId: string = await createUser();

    const user = await getUser(userId);

    return user;
};

describe('Typing async function', () => {
    it('Should create the user, then get them', async () => {
        const user = await createThenGetUser(
            async () => '123',
            async (id) => ({
                id,
                firstName: 'Matt',
                lastName: 'Pocock',
            })
        );
        
        expect(user).to.deep.equal({
            id: '123',
            firstName: 'Matt',
            lastName: 'Pocock',
        });
    });
});
