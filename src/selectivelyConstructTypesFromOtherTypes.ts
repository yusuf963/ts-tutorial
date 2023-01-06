/*
Challenge
Given this User interface, create a new object type that only
 includes the firstName and lastName properties:
*/

import { type } from "os";
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
type MyType = Pick<User, "firstName" | "lastName">; // this is the way to do it
type MyType1 = Omit<User,"id">; // this is another way to do it by omitting the id property

// type MyType = unknown;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];


// notes
/*
Pick is a utility type that constructs a type by picking the set of properties K from T.
Pick signature
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
*/