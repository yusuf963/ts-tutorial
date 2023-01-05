/*
## Challenge
Your challenge is to work out how to mark the last parameter as optional.
*/

import assert from "assert";
import { expect } from "chai";
import { it } from "mocha";

export const getName = (first: string, last?: string, ...arg:string[]) => {
  if (arg.length === 0 && !last) return first
  if (last && arg.length=== 0) return `${first} ${last}`
  return `${first} ${last} ${arg}`;
};

it.only("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).to.deep.equal("Matt");
});

it.only("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");
  expect(name).to.deep.equal("Matt Pocock");
});


it.only("Should work with the first and last name and ..arg", () => {
    const name = getName("Matt", "Pocock", "a", "b", "c");

    assert.equal(name, "Matt Pocock a,b,c");
  });