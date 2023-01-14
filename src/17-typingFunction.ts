/*
Challenge
Your challenge is to visit the TypeScript Docs and work out how
 to appropriately type the onFocusChange function.
 https://www.typescriptlang.org/docs/handbook/2/functions.html
*/
import { Equal, Expect } from './helpers/type-utils';

/**
 * How do we type onFocusChange?
 */

interface CallOrConstruct {
    // another way interface for function
    (n?: boolean): boolean;
}

const addListener = (onFocusChange: (isFoucsed: boolean) => void) => {
    // pass arg to the inner function and return void of it
    // window.addEventListener("focus", () => { // comment out this line because it will give error as I am on node and not on browser
    //   onFocusChange(true);
    // });
    // window.addEventListener("blur", () => { // comment out this line because it will give error as I am on node and not on browser
    //   onFocusChange(false);
    // });
};

addListener((isFocused) => {
    console.log({ isFocused });

    type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
