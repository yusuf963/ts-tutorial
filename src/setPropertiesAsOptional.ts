/*
Challenge
Your challenge is to figure out how to type the object so that last is optional.
*/

import assert from 'assert';
import { expect } from "chai";
import { it } from "mocha";


const getName = (params: { first: string; last?: string}) => {
    if(!params.last) return params.first
    return `${params.first} ${params.last}`;
}

const getNameX = (params: { first: string; last: string | undefined}) => {
    if(!params.last) return params.first
    return `${params.first} ${params.last}`;
}

getNameX({first: 'Matt', last: undefined }) // you have to pass undefined to last


interface Params {
    first: string;
    last?: string | undefined;
}
type ParamsX = {
    first: string;
    last?: string | undefined;
}
const getNameY = (params: Params | ParamsX): string => {
    if(!params.last) return params.first
    return `${params.first} ${params.last}`;
}

getNameY({first: 'Matt', last: undefined }) // you have to pass undefined to last


// Write your tests here

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).to.equal("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).to.equal("Matt Pocock");
});

it("Should work with the first and last name using assert ", () => {
    const name = getNameY({
      first: "Matt",
      last: "Pocock",
    });
  
    assert.equal(name, "Matt Pocock");
  });
