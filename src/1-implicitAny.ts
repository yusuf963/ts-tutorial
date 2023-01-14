/*
Read through the "Migrating from JavaScript" article in the TypeScript 
docs and see if you can find how to fix these TypeScript errors.
*/

// import assert from 'assert';

import { expect } from 'chai';
import { it } from 'mocha';
const addNum = (a: number, b: number) => {
    return a + b;
};
const addObject = (a: {}, b: {}) => {
    return { ...a, ...b };
};

// write two array
const joinArray = (a: object[] | undefined, b: number[] | null) => {
    if (a) {
        return [...a];
    }
};
joinArray([], []);

// T is a generic type
const joinArray2 = <T>(a: T[], b: T[]) => {
    return [...a, ...b];
};
// write emun variable
enum Color {
    Red = 'red',
    Green = 'green',
}

const color = Color.Red;

describe('Implicitly any type', () => {
    it('should add two numbers', () => {
        const result = addNum(2, 3);
        expect(result).to.equal(5);
    });

    it('should add two objects', () => {
        const result = addObject({ name: 'bob' }, { age: 22 });
        expect(result).to.deep.equal({ name: 'bob', age: 22 });
    });

    it('should add two arrays', () => {
        const result = joinArray2([1, 2], [3, 4]);
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('should return T type', () => {
        const result = joinArray2(['1', '2'], ['3', '4']);
        expect(result).to.deep.equal(['1', '2', '3', '4']);
    });
});
