/*
Challenge
Your challenge is to write the function so that the tests pass.

There will be some little type errors along the way, but this is an interesting problem to solve.
*/

import { it } from "mocha";
import { expect } from "chai";

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "object" && amount.amount) {
    return amount.amount;
  }
  return amount;
};

describe("Narrowing down union types", () => {
  it("Should return the amount when passed an object", () => {
    expect(coerceAmount({ amount: 20 })).to.be.equal(20);
  });

  it("Should return the amount when passed a number", () => {
    expect(coerceAmount(20)).to.be.equal(20);
  });
});


// point to note: typeof amount === "object" && amount.amount
// so you can narrow down union type with the help of type of.