/*
Work out how to type params as an object with a key of first
 that is a number and a key of second that is also a number.
*/

import { expect } from 'chai';


const addTwoNumber = (params: { first: number; second: number }) => {
  return params.first + params.second;
};


interface Params  {
    first: number;
    second: number;
}

interface ParamsX {
    first: number;
    second: number;
    third: number;
}

// interface ParamsY extends ParamsX{
    
// } // you can not extend interface without adding new properties, so I can do this
type ParamsY = ParamsX


const addTwoNumberX = (params:Params | ParamsX | ParamsY ) => {
    return params.first + params.second + (params as ParamsY).third;
  };

addTwoNumberX({first: 1, second: 2})



it('should add two numbers', ()=>{
    const result = addTwoNumber({first: 1, second: 2})
    expect(result).to.equal(3)
})