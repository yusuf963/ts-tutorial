/*
Challenge
Reference the TypeScript docs and determine how to change defaultUser so that
 our test will pass.
 https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
*/

import {it } from "mocha";
import { expect } from "chai";


interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

/**
* How do we ensure that defaultUser is of type User
* at THIS LINE - not further down in the code?
*/
const defaultUser: User = {}; // error out becouse defaultUser does not meet the contract with type User

const getUserId = (user: User) => {
return user.id;
};

it("Should get the user id", () => {
expect(getUserId(defaultUser)).to.deep.equal(1);
});