// import {it} from 'mocha'

const addTwoNumber = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

type Params = {
    first: number;
    second: number;
}

const addTwoNumberX = (params:Params ) => {
    return params.first + params.second
  };