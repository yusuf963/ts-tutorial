/*
Challenge
Similar to a previous challenge, we want TypeScript to show us error messages on
 the lines where they happen instead of in a test.

Your challenge is to annotate the makeUser function to make sure it always returns a User.
*/
import { expect } from "chai";
import { it } from "mocha";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = ():User => {
  return {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
        {
            id: 1,
            title: "How I eat so much cheese",
        },
    ]
  };
};

const user = makeUser();

it("Should user has property of lastName", () => {
    expect(user).to.have.property("lastName");
});

it("Should return a valid user", () => {

  expect(user.id).to.be.a("number");
  expect(user.firstName).to.be.a("string");
  expect(user.lastName).to.be.a("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user", "dw"]);

  expect(user.posts[0].id).to.be.a("number");
  expect(user.posts[0].title).to.be.a("string");
});


it("Should return a valid user admin value", () => {
    expect(user.role).to.be.oneOf(['admin']);
});

