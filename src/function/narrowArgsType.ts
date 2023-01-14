const myFunc1 = <T>(a: T): T => a;

myFunc1<string>('1');
console.log(myFunc1<string>('1'));
const myFunc2 = (...args: number[]) => {
    if (args[0] !== undefined && args[1] !== undefined) {
        return args[0] + args[1];
    }
    return 0;
};
const myFunc3 = (...args: number[]) => {
    if (args.length > 0) {
        return args.reduce((sum, num) => sum + num, 0);
    }
    return 0;
};
