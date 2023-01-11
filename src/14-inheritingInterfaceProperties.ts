/*
Challenge
Your challenge is to do some refactoring to DRY out this code.

Consult the TypeScript docs to determine how you can share the id property without 
writing the same line of code repeatedly.
https://www.typescriptlang.org/docs/handbook/2/objects.html

*/

import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
    id: string;
}
interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface Commt extends Base{
  comment: string;
}
const testingType:Commt = {comment: 'ok', id: 'ok'}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Commt, { id: string; comment: string }>>,
];
