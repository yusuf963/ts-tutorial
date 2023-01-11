/*
Challenge
Your challenge is to update guitarists to be typed a set of strings.
*/

import { expect } from "chai";
import { it } from "mocha";

type setType = string[] | number[] | {}[];

const guitarists = new Set<any>();
const guitaristsX = new Set<{}[]>();
const guitaristsY = new Set<string[]>();
const guitaristsN = new Set<setType>();

guitaristsX.add(["Jimi Hendrix", "Eric Clapton"]);
guitaristsN.add([3]);

const map = new Map<string, string>(); // Map<key, value> takes two type arguments
map.set("a", "b");
const mapX = new Map<string, number>();
mapX.set("a", 1);

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

describe("Passing Type Argument", () => {
  it("Should contain Jimi and Eric", () => {
    expect(guitarists.has("Jimi Hendrix")).to.equal(true);
    expect(guitarists.has("Eric Clapton")).to.equal(true);
  });

  it("Should give a type error when you try to pass a non-string", () => {
    /*  // @ts-expect-error */
    guitarists.add(2);
    expect(guitarists.has(2)).to.equal(true);
  });

  it("Should be typed as an array of strings", () => {
    const guitaristsAsArray = Array.from(guitarists);
    expect(guitaristsAsArray).to.deep.equal([
      "Jimi Hendrix",
      "Eric Clapton",
      2,
    ]);

    //   type tests = [expect <Equal<typeof guitaristsAsArray, string[]>>];
  });
});
