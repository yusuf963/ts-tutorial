/*
Challenge
Your challenge is to update guitarists to be typed a set of strings.
*/

import { expect } from "chai";
import { it } from "mocha";

const guitarists = new Set<string>();


const map = new Map<string, string>(); // Map<key, value> takes two type arguments
map.set("a", "b");
const mapX = new Map<string, number>();
mapX.set("a", 1);



guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it.only("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).to.equal(true);
  expect(guitarists.has("Eric Clapton")).to.equal(true);
});

it.only("Should give a type error when you try to pass a non-string", () => {
  /*  // @ts-expect-error */
 expect(guitarists.add(2)).to.throw('');
});

it.only("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);
  expect(guitaristsAsArray).to.deep.equal(["Jimi Hendrix", "Eric Clapton"]);

//   type tests = [expect <Equal<typeof guitaristsAsArray, string[]>>];
});
