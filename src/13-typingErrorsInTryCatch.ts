/*
Challenge
Your challenge is to coerce the unknown type into one where we know what it is.

Hint: there are a few ways to solve this challenge-- see what you can come up with! 
*/

import { expect} from "chai";
import { it } from "mocha";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    return "Success!";
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    return (e as Error).message // another way to fix the error
    return (e as any).message  // another way to fix the error, but not recommended because it will not give you any type safety and lose the auto complete feature.
  }
};


describe("Coercing unknown types", () => {

    it("Should return the message when it fails", () => {
        expect(tryCatchDemo("fail")).to.be.equal("Failure!");
    });
    
})