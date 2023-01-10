
const myFunct = () => {
  return ()=>{
    return {
        name: 'test',
        age: 10
    }
  };
};
/**
 * @author
 * @param {Function} myFunct
 * @example
 * @deprecated
 * 
 * the below type is infering the retunr type of a given function
 * ReturnType is a global and generic type in typescript
 * if we change the return type of myFunct to string, the type of FuncResult will be string
 * if we change the return type of myFunct to number, the type of FuncResult will be number
 * it really fun to use this type
 */
type FuncResult = ReturnType<typeof myFunct>;



type MyReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
  ) => infer R
    ? R
    : any;

type MyReturnTypeX<T extends (...args: any[]) => any> = T extends () => infer R? R : any;